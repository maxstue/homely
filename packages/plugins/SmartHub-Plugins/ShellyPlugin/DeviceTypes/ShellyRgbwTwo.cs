using System;
using System.Collections.Generic;
using SmartHub.BasePlugin.Interfaces;
using SmartHub.BasePlugin.Interfaces.DeviceTypes;

namespace ShellyPlugin.DeviceTypes
{
    public class ShellyRgbwTwo : ShellyBasePlugin, ILight, IHttpSupport
    {
        public override string Name { get; set; } = $"{nameof(ShellyRgbwTwo)}";

        public string SettingsColor { get; set; } = "/settings/color/0";
        public string SettingsWhite { get; set; } = "/settings/white/<n>"; //bsp. =  /white/1?brightness=52
        // n 1 -4  damit kann man einzelne farben nur ansteuern
        public string Color { get; set; } = "/color/0"; // bsp. = /color/0?turn=on&red=220&green=0&blue=2&white=0
        // Settings  => zwischen einzel farben oder alle auf einmal ansprechen
        // settings/?mode=color => alle  settings/?mode=white => einzel

        public ILight InstantiateQuery()
        {
            PathBuilder = new();
            QueryParams = new();
            return this;
        }

        public Tuple<string, Dictionary<string, string>> Build()
        {
            return new(PathBuilder.ToString(), QueryParams);
        }

        public ILight SetLight(bool? onOff)
        {
            PathBuilder.Append(Color);
            if (onOff is null)
            {
                return this;
            }
            if (onOff.Value)
            {
                QueryParams.Add(TurnOnOff, "on");
            }
            if (onOff.Value == false)
            {
                QueryParams.Add(TurnOnOff, "off");
            }
            return this;
        }

        public ILight SetRgba(int red, int green, int blue, int alpha)
        {
            throw new NotImplementedException();
        }
    }
}