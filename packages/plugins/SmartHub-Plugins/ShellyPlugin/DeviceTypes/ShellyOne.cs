using System;
using System.Collections.Generic;
using SmartHub.BasePlugin.Interfaces;
using SmartHub.BasePlugin.Interfaces.DeviceTypes;

namespace ShellyPlugin.DeviceTypes
{
    public class ShellyOne : ShellyBasePlugin, ILight, IHttpSupport
    {
        public override string Name { get; set; } = $"{nameof(ShellyOne)}";

        public string SettingsRelay { get; set; } = "/settings/relay/0";
        public string Relay { get; set; } = "/relay/0";

        public ShellyOne()
        {
        }

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
            if (onOff is null)
            {
                return this;
            }
            if (onOff.Value)
            {
                QueryParams.Add(TurnOnOff, "On");
            }
            if (onOff.Value == false)
            {
                QueryParams.Add(TurnOnOff, "Off");
            }
            return this;
        }

        public ILight SetRgba(int red, int green, int blue, int alpha)
        {
            return this;
        }
    }
}