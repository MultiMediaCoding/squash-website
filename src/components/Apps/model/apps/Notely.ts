import { App } from "../App";
import { isymbols } from "./iSymbols";
import { skationary } from "./Skationary";

export const notely: App = {
  name: "Notely",
  shortDescription: "Ntfy push notifications",
  icon: "/images/Apps/Notely/icon.png",
  pageTitle: "Description",
  pageSubtitle: "Receive real-time data via the Ntfy API, displayed as native push notifications on your Mac.",
  pageDescription: "Instant notifications for your Mac",previewImages: [
    "/images/Apps/Notely/PreviewImages/HomeDesktop.png",
    "/images/Apps/Notely/PreviewImages/SplineStack1.png",
    "/images/Apps/Notely/PreviewImages/SplineStack2.png",
    "/images/Apps/Notely/PreviewImages/HomeLight.png",
    "/images/Apps/Notely/PreviewImages/HomeDark.png",
  ],
  features: [
    {
      name: "Auto Start​",
      description:
        "The menu bar integration ensures HiddenDesk is always one click away.",
      image: "/images/Apps/Notely/Features/AutoStart.png",
    },
    {
      name: "Silent Mode",
      description:
        "Mute notifications with a single click and block the stream.",
      image: "/images/Apps/Notely/Features/SilentMode.png",
    },
    {
      name: "Works with ntfy",
      description:
        "Seamless integration with the ntfy service to recive notivications",
      image: "/images/Apps/Notely/Features/WorksWithNtfy.png",
    },
  ],
  mockupFeatures: [
    {
      image: "/images/Apps/Notely/MockupFeatures/NativeNotifications.png",
      title: "Native Notifications",
      subtitle: "Receive and display Ntfy alerts",
      description:
        "Get notifications from Ntfy as native macOS push notifications, seamlessly integrating with your system’s notification center.",
      alignment: "left",
    },

    {
      image: "/images/Apps/Notely/MockupFeatures/NotelyChannels.png",
      title: "Notely Channels",
      subtitle: "Filter your ntfy channel streams",
      description:
        "Notely makes it simple to manage all your ntfy channels with a clear and intuitive interface for adding and removing the ones you want the app to listen to.",
      alignment: "right",
    },
    {
      image: "/images/Apps/Notely/MockupFeatures/InYourMenuBar.png",
      title: "In your Menu Bar",
      subtitle: "Compact design - minimal resource use",
      description:
        "The menu bar integration ensures HiddenDesk is always one click away and runs seamless on your Mac.",
      alignment: "left",
    },
  ],
  comments: [],
  link: "https://apps.apple.com/de/app/notely/id6477283566?mt=12",
  version: "1.0",
  size: "645 KB",
  category: "Utility",
  price: 0.99,
  otherProducts: [isymbols, skationary],
};
