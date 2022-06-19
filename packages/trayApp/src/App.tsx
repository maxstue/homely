import React, { useState } from 'react';
import './App.css';
import RepositoriesList from './components/RepositoriesList';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className='App'>
      {isLoggedIn ? <RepositoriesList /> : <div>YOu are not loggedIn</div>}
      <h2>hello wedasd </h2>
      <div>Test</div>
    </div>
  );
}

export default App;
