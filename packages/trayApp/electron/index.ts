// Native
import { join } from 'path';

// Packages
import {
  BrowserWindow,
  app,
  ipcMain,
  IpcMainEvent,
  nativeImage,
  Tray,
} from 'electron';
import isDev from 'electron-is-dev';

let tray: Tray | null = null;
let window: BrowserWindow | null = null;

const height = 450;
const width = 320;

function createWindow() {
  // Create the browser window.
  window = new BrowserWindow({
    width: width,
    height: height,
    frame: false,
    show: false,
    resizable: false,
    fullscreenable: false,
    webPreferences: {
      preload: join(__dirname, 'preload.js'),
    },
  });

  const port = process.env.PORT || 3000;
  const url = isDev
    ? `http://localhost:${port}`
    : join(__dirname, '../src/out/index.html');

  // and load the index.html of the app.
  isDev ? window?.loadURL(url) : window?.loadFile(url);

  // Open the DevTools.
  // window.webContents.openDevTools();

  window.on('closed', () => (window = null));

  // window.on('blur', () => {
  //   if (!window.webContents.isDevToolsOpened()) {
  //       toggleWindow();
  //   }
  // });
}

const createTray = () => {
  const icon = join(__dirname, '../renderer/out/assets/electron_32x32.png');
  const nImage = nativeImage.createFromPath(icon);

  tray = new Tray(nImage);
  tray.on('click', () => toggleWindow());
};

const toggleWindow = () => {
  window?.isVisible() ? window?.hide() : showWindow();
};

const showWindow = () => {
  const windowBounds = window!.getBounds();
  const trayBounds = tray!.getBounds();

  const x = Math.round(
    trayBounds!.x + trayBounds!.width / 2 - windowBounds!.width / 2
  );
  const y = Math.round(trayBounds!.y - trayBounds!.height - (height - 30));
  window?.setPosition(x, y);
  window?.show();
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createTray();
  createWindow();

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

// listen the channel `message` and resend the received message to the renderer process
ipcMain.on('message', (event: IpcMainEvent, message: any) => {
  console.log(message);
  setTimeout(() => event.sender.send('message', 'hi from electron'), 500);
});
