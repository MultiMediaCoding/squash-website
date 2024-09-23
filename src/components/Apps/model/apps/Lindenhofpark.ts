import { SoftwareTarget } from "../../AppPreview/MockupFeature/model/MockupFeatureProps";
import { App, DeploymentTarget } from "../App";
import { bodenseeTemperatur } from "./BodenseeTemperatur";
import { bodenseeTemperaturProduct } from "../Products";

export const lindenhofpark: App = {
  name: "Lindenhofpark",
  shortDescription: "Discover regional nature and culture",
  icon: "/images/Apps/Lindenhofpark/icon.png",
  inProduction: true,
  pageTitle: "Experience Lindenhof Park in a Digital App Journey",
  pageSubtitle:
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
      softwareTarget: SoftwareTarget.iOS,
    },

    {
      image: "/images/Apps/Lindenhofpark/MockupFeatures/RegionalHistory.png",

      title: "Regional History",
      subtitle: "Uncover the park’s hidden stories",
      description:
        "Explore Lindenhof’s history, including old ruins, monuments, and historical buildings. Interesting side facts will enrich your walk through the park.",
      alignment: "right",
      softwareTarget: SoftwareTarget.iOS,
    },
    {
      image: "/images/Apps/Lindenhofpark/MockupFeatures/InteractiveMap.png",
      title: "Interactive Map",
      subtitle: "Enhance Your Park Adventure",
      description:
        "Explore Lindenhof Park with ease using the interactive map. Track your location in real-time and uncover details and photos about nearby trees, monuments, and sites as you walk by.",
      alignment: "left",
      softwareTarget: SoftwareTarget.iOS,
    },
  ],
  comments: [
    {
      id: crypto.randomUUID(),
      title: "Wow!",
      description:
        "🌟🌟🌟🌟🌟Die App zur Erkundung des Lindenhofparks in Lindau ist ein wahres Juwel für alle Geschichts- und Naturfreunde! Sie bietet nicht nur beeindruckende Bilder und detaillierte Informationen zu den Sehenswürdigkeiten des Parks, sondern auch spannende historische Fakten, die das Erlebnis bereichern. Die Benutzeroberfläche ist intuitiv gestaltet und sehr benutzerfreundlich. Egal, ob man auf der Suche nach historischen Informationen oder einfach nur einem schönen Spaziergang durch den Park ist, die App erfüllt alle Erwartungen. Sie lädt zum Entdecken ein und macht den Besuch des Lindenhofparks zu einem unvergesslichen Erlebnis. Absolut empfehlenswert!",
      rating: 5,
    },
    {
      id: crypto.randomUUID(),
      title: "Tolle App",
      description:
        "Tolle Apo, tolle Beschreibung, sehr informativ und einfach zu bedienen. Für einen Spaziergang im wunderschönen Lindenhofpark in Lindau Schachen die ideale Begleit-App, die Bäume und historischen Orte anschaulich beschreibt und dazu die Bilder zeigt. Für Erwachsene, Jugendliche und Grundschulkinder empfehlenswert.",
      rating: 5,
    },
    {
      id: crypto.randomUUID(),
      title: "Schöne Idee",
      description:
        "Schöne Idee und toll umgesetzt. Der Lindenhofpark in Lindau ist einer der schönsten Parks der Stadt. Die App bietet interessante Infos hierzu und lädt ein den Park zu entdecken und bewusster auf die Natur zu achten. Schön auch, dass so ein Projekt von Schülern aus Lindau umgesetzt wird. Hut ab.",
      rating: 5,
    },
    {
      id: crypto.randomUUID(),
      title: "Toll gemacht und sehr informativ 🤩",
      description:
        "Eine super App, sehr intuitiv gestaltet mit tollen Informationen zum Lindenhofpark. So etwas habe ich mir immer gewünscht, da es in Lindau und Umgebung so viele historische Orte gibt 😍",
      rating: 5,
    },
  ],
  version: "1.0",
  deployments: [
    {
      link: "https://apps.apple.com/de/app/lindenhofpark/id6477407985",
      target: DeploymentTarget.iOS,
    },
    {
      link: "https://play.google.com/store/apps/details?id=com.drinke.lindenhofpark&pcampaignid=web_share",
      target: DeploymentTarget.android,
    },
  ],
  size: "263,3 MB",
  category: "Reference",
  price: 0.0,
  otherProducts: [bodenseeTemperaturProduct],
};
