using SmartHub.BasePlugin.Interfaces;
using SmartHub.BasePlugin.Interfaces.DeviceTypes;
using System;
using System.Collections.Generic;
using System.Text;

namespace MockPlugin
{
	public class MockLightPlugin : IMockLightPlugin
	{
		public string Id { get; set; } = Guid.NewGuid().ToString();
		public string Name { get; set; } = $"{nameof(MockLightPlugin)}";
		public string Company { get; set; } = $"{typeof(MockLightPlugin).Assembly.FullName.Split("P")[0]}";
		public DateTime ModifiedAt { get; }
		public DateTime CreatedAt { get; }
		public bool MqttSupport { get; set; } = false;
		public bool HttpSupport { get; set; } = true;
		public string AssemblyVersion { get; }
		public string TurnOnOff { get; set; } = "turn=";
		private StringBuilder PathBuilder { get; set; }

		public ILight InstantiateQuery()
		{
			PathBuilder = new();
			return this;
		}

		ILight ILight.SetLight(bool? onOff)
		{
			if (onOff is null)
			{
				return this;
			}
			if (onOff.Value)
			{
				// Builder.Append(TurnOnOff + "On");
			}
			if (onOff.Value == false)
			{
				// Builder.Append(TurnOnOff + "Off");
			}
			return this;
		}

		public ILight SetRgba(int red, int green, int blue, int alpha)
		{
			//TODO: Implement logic
			return this;
		}

		public Tuple<string, Dictionary<string, string>> Build()
		{
			return new(PathBuilder.ToString(), new());
		}
	}
}