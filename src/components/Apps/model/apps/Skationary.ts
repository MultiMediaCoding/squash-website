import { SoftwareTarget } from "../../AppPreview/MockupFeature/model/MockupFeatureProps";
import { App } from "../App";
import { bodenseeTemperaturProduct, lindenhofparkProduct } from "../Products";

export const skationary: App = {
  name: "Skationary",
  shortDescription: "All your skatetricks and clips",
  icon: "/images/Apps/Skationary/icon.png",
  inProduction: false,
  pageTitle: "Your smart progress tracker for skateboarding",
  pageSubtitle:
    "Skationary makes tracking tricks you learn effortless and fun by letting you add video clips and automatically organizing them for you.",
  previewImages: [
    "/images/Apps/Skationary/PreviewImages/Videos.png",
    "/images/Apps/Skationary/PreviewImages/TrickDetails.png",
    "/images/Apps/Skationary/PreviewImages/VideoPlayer.png",
    "/images/Apps/Skationary/PreviewImages/AddTrickView.png",
  ],
  features: [
    {
      name: "Filter Options",
      description:
        "Easily filter your entries by difficulty level or the skateparks you visited.",
      image: "/images/Apps/Skationary/Features/FilterOptions.png",
    },
    {
      name: "Manage Locations",
      description:
        "Browse street spots and skateparks and link them to your tricks.",
      image: "/images/Apps/Skationary/Features/ManageLocations.png",
    },
    {
      name: "Easy Editing",
      description:
        "Forgot something? Easily edit or delete any entry as needed.",
      image: "/images/Apps/Skationary/Features/EasyEditing.png",
    },
  ],
  mockupFeatures: [
    {
      image: "/images/Apps/Skationary/MockupFeatures/AllYourTricks.png",
      title: "All your tricks",
      subtitle: "Keep the overview",
      description:
        "Easily browse through all your saved tricks in one place and review your notes and videos. Looking for something specific? Just search by notes or titles.",
      alignment: "left",
      softwareTarget: SoftwareTarget.iOS,
    },

    {
      image: "/images/Apps/Skationary/MockupFeatures/DetailedInfos.png",
      title: "Detailed Infos",
      subtitle: "Add breakdowns for each of your tricks",
      description:
        "Access detailed information for each trick, including the video clip, trick name, difficulty level, notes, and creation date.",
      alignment: "right",
      softwareTarget: SoftwareTarget.iOS,
    },
    {
      image: "/images/Apps/Skationary/MockupFeatures/AddNewTricks.png",
      title: "Add New Tricks",
      subtitle: "Capture and Save Progress",
      description:
        "Upload videos, name your trick, set the difficulty, and add notes to track your progress. You can also link your skatepark.",
      alignment: "left",
      softwareTarget: SoftwareTarget.iOS,
    },
    {
      image: "/images/Apps/Skationary/MockupFeatures/EnjoyYourClips.png",
      title: "Enjoy your Clips",
      subtitle: "Revisit recorded Moments",
      description:
        "Watch your recorded skate clips, track your progress, and even slow them down to 0.5 speed for detailed review.",
      alignment: "right",
      softwareTarget: SoftwareTarget.iOS,
    },
  ],
  comments: [],
  link: "",
  version: "2.1",
  size: "1,6 MB",
  category: "Sports",
  price: 1.99,
  otherProducts: [bodenseeTemperaturProduct, lindenhofparkProduct],
};
