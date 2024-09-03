import "./App.css";
import { CSSProperties } from "react";
import { PresentationBox } from "./components/PresentationBox";
import { DevelopersHeader } from "./components/Home/DevelopersHeader";
import { NavigationBar } from "./components/Navigation/NavigationBar";
import { AboutPage } from "./components/About/AboutPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import iphone from "/images/iPhone.png";
import { FAQ } from "./components/Home/FAQ";
import isymbols from "/images/iSymbols.png";
import { SupportPage } from "./components/Support/SupportPage";
import { AppsPage } from "./components/Apps/AppsPage/AppsPage";
import { AppPreviewPage } from "./components/Apps/AppPreview/view/AppPreviewPage";

export function Home() {
  const cards = [
    {
      image: iphone,
      title: "iSymbols",
      subtitle: "The best icon library",
      description:
        "iSymbols is the best icon library in the world. It has a wide variety of icons that you can use in your projects.",
      buttonDestination: "/test",
      alignItems: "left",
    },
    {
      image: iphone,
      title: "Hidden Desk",
      subtitle: "Declutter your desktop",
      description:
        "iSymbols is the best icon library in the world. It has a wide variety of icons that you can use in your projects.",
      buttonDestination: "/about",
      alignItems: "right",
    },
  ];

  return (
    <div>
      <NavigationBar></NavigationBar>
      <DevelopersHeader></DevelopersHeader>
      {cards.map((card) => (
        <PresentationBox
          image={card.image}
          title={card.title}
          subtitle={card.subtitle}
          description={card.description}
          buttonDestination={card.buttonDestination}
          alignment={card.alignItems as CSSProperties["textAlign"]}
        ></PresentationBox>
      ))}
      <br></br>
      <br></br>
      <FAQ></FAQ>
      <br></br>
      <br></br>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apps" element={<AppsPage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/apps/isymbols" element={<AppPreviewPage />} />
          <Route path="/apps/Hidden%20Desk" element={<AppPreviewPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
