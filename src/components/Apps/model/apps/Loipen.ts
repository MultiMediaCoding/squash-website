import { SoftwareTarget } from "../../AppPreview/MockupFeature/model/MockupFeatureProps";
import { App, DeploymentTarget } from "../App";
import { lindenhofparkProduct } from "../Products";

export const loipen: App = {
  name: "Loipen",
  shortDescription: "Cross-Country Skiing & Tracking",
  icon: "/images/Apps/Loipen/icon.png",
  inProduction: true,
  pageTitle: "Your ultimate companion for wintertime",
  pageSubtitle:
    "Easily find regional cross-country ski trails, record your tours with GPS, and check real-time conditions.",
  previewImages: [
    "/images/Apps/Loipen/PreviewImages/SlopesList.png",
    "/images/Apps/Loipen/PreviewImages/SlopeSheet.png",
    "/images/Apps/Loipen/PreviewImages/RecordedTours.png",
  ],
  features: [
    {
      name: "iCloud Sync",
      description: "Sync your tours and progress across devices with iCloud.",
      image: "/images/Apps/Loipen/Features/iCloudSync.png",
    },
    {
      name: "Live Webcams",
      description: "Plan ahead with real-time insigts and images.",
      image: "/images/Apps/Loipen/Features/LiveWebcams.png",
    },
    {
      name: "Elevation Analysis",
      description: "Elevation insights reveal climbs and descents at a glance",
      image: "/images/Apps/Loipen/Features/ManageLocations.png",
    },
  ],
  mockupFeatures: [
    {
      image: "/images/Apps/Loipen/MockupFeatures/SlopeSheet.png",
      title: "Discover Trails",
      subtitle: "Find the perfect cross-country skiing route",
      description:
        "Explore a growing collection of community-shared trails. Check distance, elevation profiles, and conditions to plan your next adventure.",
      alignment: "left",
      softwareTarget: SoftwareTarget.iOS,
    },

    {
      image: "/images/Apps/Loipen/MockupFeatures/TrackingView.png",
      title: "Track Your Tours",
      subtitle: "Record and analyze your performance",
      description:
        "Use GPS tracking to log your routes in real-time. Get detailed stats on speed, distance, and calories burned to improve your training.",
      alignment: "right",
      softwareTarget: SoftwareTarget.iOS,
    },

    {
      image: "/images/Apps/Loipen/MockupFeatures/PublicSlopesList.png",
      title: "Stay Connected",
      subtitle: "Share favorite trails with the community",
      description:
        "Upload your recorded routes, share them with others, and discover new trails recommended by fellow skiers.",
      alignment: "left",
      softwareTarget: SoftwareTarget.iOS,
    },
    {
      image: "/images/Apps/Loipen/MockupFeatures/WebcamPreview.png",
      title: "Live Conditions",
      subtitle: "Real-time insights with webcams",
      description:
        "View live webcam footage from selected trails to check snow conditions and ensure the best skiing experience.",
      alignment: "right",
      softwareTarget: SoftwareTarget.iOS,
    },
  ],
  comments: [],
  deployments: [
    {
      link: "https://apps.apple.com/de/app/loipen/id6743033790",
      target: DeploymentTarget.iOS,
    },
  ],
  version: "1.0",
  size: "2,3 MB",
  category: "Sports",
  price: 0.0,
  otherProducts: [lindenhofparkProduct],
};
