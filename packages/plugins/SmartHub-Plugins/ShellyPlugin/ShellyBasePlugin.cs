using SmartHub.BasePlugin;

namespace ShellyPlugin
{
	public abstract class ShellyBasePlugin : AbstractPlugin
	{
		#region HTTP

		// All Shelly
		public string Shelly { get; set; } = "/shelly";
		public string Settings { get; set; } = "/settings";
		public string SettingsAp { get; set; } = "/settings/ap";
		public string SettingsSta { get; set; } = "/settings/sta";

		// static ip bsp. => /settings/sta?ipv4_method=static&ip=192.168.2.101&netmask=255.255.255.0&gateway=192.168.2.1
		public string SettingsLogin { get; set; } = "/settings/login";
		public string SettingsCloud { get; set; } = "/settings/cloud";
		public string Status { get; set; } = "/status";
		public string Reboot { get; set; } = "/reboot";
		public string TurnOnOff { get; set; } = "turn";

		#endregion HTTP
	}
}
