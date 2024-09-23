import { SoftwareTarget } from "../../AppPreview/MockupFeature/model/MockupFeatureProps";
import { App, DeploymentTarget } from "../App";
import { bodenseeTemperatur } from "./BodenseeTemperatur";
import { skationary } from "./Skationary";
import { hiddenDeskProduct, isymbolsProduct } from "../Products";

export const itask: App = {
  name: "iTask",
  shortDescription: "Focus-Boosting To-Dos",
  icon: "/images/Apps/iTask/icon.png",
  inProduction: false,
  pageTitle: "Regain focus over your daily tasks",
  pageSubtitle:
    "iTask is a sleek to-do list app that lets you easily organize and customize your tasks. Keep track of what’s done.",

  previewImages: [
    "/images/Apps/iTask/PreviewImages/TaskListEntires.png",
    "/images/Apps/iTask/PreviewImages/TaskCategories.png",
  ],
  features: [
    {
      name: "Categories",
      description:
        "Organize tasks effortlessly with customizable categories for a clear, structured view.",
      image: "/images/Apps/iTask/Features/Categories.png",
    },
    {
      name: "On Device Storage",
      description:
        "Your data is securely stored directly on your device, ensuring maximum privacy.",
      image: "/images/Apps/iTask/Features/MinimalisticDesign.png",
    },
    {
      name: "Minimalistic Design",
      description: "Get things done with a clear and simple user interface.",
      image: "/images/Apps/iTask/Features/OnDeviceStorage.png",
    },
  ],
  mockupFeatures: [
    {
      image: "/images/Apps/iTask/MockupFeatures/TaskList.png",
      title: "Simple Todo List",
      subtitle: "Streamline Your Tasks and Achieve More",
      description:
        "Maximize your productivity with a distraction-free interface designed to focus on what’s essential.",
      alignment: "left",
      softwareTarget: SoftwareTarget.iOS,
    },

    {
      image: "/images/Apps/iTask/MockupFeatures/Categories.png",
      title: "Categories",
      subtitle: "Organize your work by grouping tasks",
      description:
        "Reduce procrastination by breaking your tasks into manageable steps, ensuring you maintain a clear overview.",
      alignment: "right",
      softwareTarget: SoftwareTarget.iOS,
    },
  ],
  comments: [],
  deployments: [],
  version: "1.0",
  size: "1,4 MB",
  category: "Productivity",
  price: 0.99,
  otherProducts: [isymbolsProduct, hiddenDeskProduct],
};
