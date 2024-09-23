import { SoftwareTarget } from "../../AppPreview/MockupFeature/model/MockupFeatureProps";
import { App, DeploymentTarget } from "../App";
import { bodenseeTemperatur } from "./BodenseeTemperatur";
import { App } from "../App";
import { hiddenDeskProduct, notelyProduct } from "../Products";

export const isymbols: App = {
  name: "iSymbols",
  shortDescription: "Icons - easier than ever",
  icon: "/images/Apps/iSymbols/icon.png",
  inProduction: true,
  pageTitle: "A new way to use SF Symbols on mobile Devices",
  pageSubtitle:
    "Export Apple SF icons to your photo library and integrate them into your designs.",
  previewImages: [
    "/images/Apps/iSymbols/PreviewImages/Editor.png",
    "/images/Apps/iSymbols/PreviewImages/Categories.png",
    "/images/Apps/iSymbols/PreviewImages/Files.png",
  ],
  features: [
    {
      name: "Save Icons Instantly​",
      description:
        "Export icons as PNG files for seamless use in your projects.",
      image: "/images/Apps/iSymbols/Features/SaveIconsInstantly​.png",
    },
    {
      name: "Preset gradients",
      description: "Enhance your icons with beautiful backgrounds.",
      image: "/images/Apps/iSymbols/Features/PresetGradients.png",
    },
    {
      name: "Icon Projects",
      description: "Create reusable projects saved in the app.",
      image: "/images/Apps/iSymbols/Features/IconProjects.png",
    },
  ],
  mockupFeatures: [
    {
      image: "/images/Apps/iSymbols/MockupFeatures/IconsList.png",
      title: "4.000 Symbols",
      subtitle: "Brose the Apple SF Symbol Database",
      description:
        "Quickly find every icon you can imagine in the SF Symbol groups and browse thousands of different glyphs.",
      alignment: "left",
      softwareTarget: SoftwareTarget.iOS,
    },

    {
      image: "/images/Apps/iSymbols/MockupFeatures/Customize.png",
      title: "Customize",
      subtitle: "Style your icons the way you like",
      description:
        "Adjust your symbol’s size, color, radius, or even add a shadow to fit your needs. When you’re ready to use it, simply export it with one tap and save it to your phones camera roll as an image.",
      alignment: "right",
      softwareTarget: SoftwareTarget.iOS,
    },
    {
      image: "/images/Apps/iSymbols/MockupFeatures/EfficientSymbolSearch.png",
      title: "Efficient Symbol Search",
      subtitle: "Streamlined Organization for Quick Access",
      description:
        "The app organizes SF symbols into 20 clear categories like Communication, Weather, and Devices, ensuring you find the right symbol swiftly and easily.",
      alignment: "left",
      softwareTarget: SoftwareTarget.iOS,
    },
  ],
  comments: [],
  deployments: [{link: "https://apps.apple.com/de/app/isymbols/id6451404922", target: DeploymentTarget.iOS}],
  version: "1.1",
  size: "1,2 MB",
  category: "Graphics & Design",
  price: 1.99,
  otherProducts: [hiddenDeskProduct, notelyProduct],
};
