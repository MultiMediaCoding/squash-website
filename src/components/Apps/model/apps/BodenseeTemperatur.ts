import { App } from "../App";

export const bodenseeTemperatur: App = {
  name: "Bodensee Temperatur",
  shortDescription: "Minimalistic lake measurements",
  icon: "/images/Apps/BodenseeTemperatur/icon.png",
  pageTitle: "Description",
  pageSubtitle: "Instantly access real-time lake temperatures, daily trends, and historical data with a minimalistic, visual interface.",
  pageDescription:
    "Lake Constance Temperature at a Glance",
  previewImages: [
    "/images/Apps/BodenseeTemperatur/PreviewMockups/Blue.png",
    "/images/Apps/BodenseeTemperatur/PreviewMockups/AllColors.png",
    "/images/Apps/BodenseeTemperatur/PreviewMockups/Stats.png",
  ],
  features: [
    {
      name: "Widget Integration​",
      description:
        "Easily access lake temperature from your home and lock screens.",
      image: "/images/Apps/BodenseeTemperatur/Features/WidgetIntegration.png",
    },
    {
      name: "Works with Siri",
      description:
        "Ask Siri for the current Lake Constance temperature anytime.",
      image: "/images/Apps/BodenseeTemperatur/Features/WorksWithSiri.png",
    },
    {
      name: "Preset gradients",
      description: "Enhance your icons with beautiful backgrounds.",
      image: "/images/Apps/BodenseeTemperatur/Features/PresetGradients.png",
    },
  ],
  mockupFeatures: [
    {
      image: "/images/Apps/BodenseeTemperatur/MockupFeatures/RealTimeData.png",
      title: "Real-Time Data",
      subtitle: "Get the latest temperature updates",
      description: "Measured at Lindau’s port on Lake Constance, data is refreshed every 30 minutes. Information is saved to generate clear charts and statistics.",
      alignment: "left",
      softwareTarget: "iOS"
    },

    {
      image:
        "/images/Apps/BodenseeTemperatur/MockupFeatures/FullTemperatureHistory.png",
      title: "Full Temperature History",
      subtitle: "Track Long-Term Temperature Trends",
      description:
        "Access a detailed temperature curve to see how the lake’s temperature has changed over time. Track historical trends and patterns.",
      alignment: "right",
      softwareTarget: "iOS"
    },
    {
      image:
        "/images/Apps/BodenseeTemperatur/MockupFeatures/VisualTemperature.png",
      title: "Visual Temperature ",
      subtitle: "Instinctively perceptible color design",
      description:
        "Color-coded indicators let you instantly see if the lake is warm or cold. Warmer colors show higher temperatures, and cooler shades represent lower ones.",
      alignment: "left",
      softwareTarget: "iOS"
    },
  ],
  comments: [],
  link: "",
  version: "1.1",
  size: "1,2 MB",
  category: "Graphics & Design",
  price: 1.99,
  otherProducts: [],
};
