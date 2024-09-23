import { SoftwareTarget } from "../../AppPreview/MockupFeature/model/MockupFeatureProps";
import { App, DeploymentTarget } from "../App";

export const hiddenDesk: App = {
  name: "HiddenDesk",
  shortDescription: "Declutter your mac destop",
  icon: "/images/Apps/HiddenDesk/icon.png",
  pageTitle: "Hidden Desk makes it easy to let your mac shine",
  pageSubtitle:
    "Keeps your Mac desktop tidy and hides all folders and documents with just a Mousecklick.",

  previewImages: [
    "/images/Apps/HiddenDesk/PreviewImages/Home.png",
    "/images/Apps/HiddenDesk/PreviewImages/Darkmode.png",
    "/images/Apps/HiddenDesk/PreviewImages/AppToggle.png",
  ],
  features: [
    {
      name: "Menu Bar App",
      description:
        "The menu bar integration ensures HiddenDesk is always one click away.",
      image: "/images/Apps/HiddenDesk/Features/MenuBar.png",
    },
    {
      name: "Keyboard Shortcuts",
      description: "Access the tool easily and anytime with Ctrl + Shift + H.",
      image: "/images/Apps/HiddenDesk/Features/Shortcuts.png",
    },
    {
      name: "Easy Usage",
      description: "Dedicated to simplicity, free of superfluous elements.",
      image: "/images/Apps/HiddenDesk/Features/Toggle.png",
    },
  ],
  mockupFeatures: [
    {
      image: "/images/Apps/HiddenDesk/MockupFeatures/HomeLight.png",
      title: "Easy Usage",
      subtitle: "Focused on the essentials",
      description:
        "HiddenDesk boasts a simple, intuitive design. Its straightforward interface makes hiding your desktop items effortless, so you can focus on what matters.",
      alignment: "left",
      softwareTarget: SoftwareTarget.macOS,
    },
    {
      image: "/images/Apps/HiddenDesk/MockupFeatures/HomeDark.png",
      title: "Adaptive Design",
      subtitle: "Adjusted to your mac’s appearence",
      description:
        "The app layout seamlessly adapts to Dark Mode, ensuring that the MacBook screen preview, visible in a compact view, aligns with the wallpaper and Dark Mode settings.",
      alignment: "right",
      softwareTarget: SoftwareTarget.macOS,
    },
    {
      image: "/images/Apps/HiddenDesk/MockupFeatures/HomeLight.png",
      title: "HotKeys",
      subtitle: "Hide your distractions even faster",
      description:
        "Quickly hide all desktop clutter with a simple Keyboard Shortcut. Press it again to instantly reveal your files and folders when you need them!",
      alignment: "left",
      softwareTarget: SoftwareTarget.macOS,
    },
  ],
  comments: [],
  deployments: [],
  version: "1.0",
  size: "1,4 MB",
  category: "Utility",
  price: 1.99,
  otherProducts: [],
};
