import { App } from "../App";
import { bodenseeTemperatur } from "./BodenseeTemperatur";

export const lindenhofpark: App = {
  name: "Lindenhofpark",
  shortDescription: "Discover regional nature and culture",
  icon: "/images/Apps/Lindenhofpark/icon.png",
  pageTitle: "Description",
  pageSubtitle: "Experience Lindenhof Park in a Digital App Journey",
  pageDescription:
    "Discover Lindenhof Park’s trees and historical landmarks with detailed info, images, and an interactive map.",
  previewImages: [
    "/images/Apps/Lindenhofpark/PreviewImages/MapView.png",
    "/images/Apps/Lindenhofpark/PreviewImages/PlaceDetails.png",
    "/images/Apps/Lindenhofpark/PreviewImages/SearchView.png",
  ],
  features: [
    {
      name: "Basic Tree Info",
      description:
        "Quickly access essential facts like tree types and their origins for a simpler overview.",
      image: "/images/Apps/Lindenhofpark/Features/BasicTreeInfo.png",
    },
    {
      name: "Categories",
      description:
        "Easily find what you need with intuitive search and category filters.",
      image: "/images/Apps/Lindenhofpark/Features/Categories.png",
    },
    {
      name: "Student Project",
      description:
        "Created by students from the Valentin Heider Gymnasium during the PSeminar Biology project.",
      image: "/images/Apps/Lindenhofpark/Features/StudentProject.png",
    },
  ],
  mockupFeatures: [
    {
      image: "/images/Apps/Lindenhofpark/MockupFeatures/DetailedData.png",
      title: "Detailed Data",
      subtitle: "Discover the park’s diverse flora",
      description:
        "Explore each tree’s biological facts complete with stunning images to enrich your experience of Lindenhof Park’s natural beauty. Learn about tree bark, leaf shapes, fruits, and the animals that call these trees home.",
      alignment: "left",
    },

    {
      image: "/images/Apps/Lindenhofpark/MockupFeatures/InteractiveMap.png",
      title: "Regional History",
      subtitle: "Uncover the park’s hidden stories",
      description:
        "Explore Lindenhof’s history, including old ruins, monuments, and historical buildings. Interesting side facts will enrich your walk through the park.",
      alignment: "right",
    },

    {
      image: "/images/Apps/Lindenhofpark/MockupFeatures/RegionalHistory.png",
      title: "Interactive Map",
      subtitle: "Enhance Your Park Adventure",
      description:
        "Explore Lindenhof Park with ease using the interactive map. Track your location in real-time and uncover details and photos about nearby trees, monuments, and sites as you walk by.",
      alignment: "left",
    },
  ],
  comments: [],
  link: "https://apps.apple.com/de/app/lindenhofpark/id6477407985",
  version: "1.0",
  size: "263,3 MB",
  category: "Reference",
  price: 0.0,
  otherProducts: [bodenseeTemperatur],
};
