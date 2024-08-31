import "./App.css";
import { CSSProperties } from "react";
import { PresentationBox } from "./components/PresentationBox";
import { DevelopersHeader } from "./components/DevelopersHeader";
import { NavigationBar } from "./components/NavigationBar";
import { AboutPage } from "./components/AboutPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import iphone from "./assets/iphone.png";
import { InfoElement } from "./components/InfoElement";
import { FAQ } from "./components/FAQ";
import { AppHeader } from "./components/AppHeader";
import isymbols from "./assets/isymbols.png";
import FeatureCard from "./components/FeatureCard";
import toggle from "./assets/toggle.png";
import { MockupFeature } from "./components/MockupFeature";
import mockup from "./assets/mockup.png";

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
      <FAQ></FAQ>
    </div>
  );
}

export function About() {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <br></br>
      <br></br>
      <AboutPage></AboutPage>
    </div>
  );
}

function TestElement() {
  return (
    <div>
      <NavigationBar backgroundColor="#F0F0F0"></NavigationBar>
      <br></br>
      <br></br>
      <AppHeader
        name="iSymbols"
        slogan="Icons - easier than ever"
        icon={isymbols}
      ></AppHeader>
      <br></br>
      <br></br>
      <InfoElement
        title="Description"
        longTitle="Everything that makes iSymbols so unique"
        description="Interested in the native experiences we build for Apple platforms. Then take a look in our app collection!"
      ></InfoElement>
      <br></br>
      <br></br>
      <FeatureCard
        title="Card Title"
        description="Card Description"
        image={toggle}
      ></FeatureCard>
      <MockupFeature
        title="4.000 Symbols"
        subtitle="Brose the Apple SF Symbol Database"
        description="Quickly find every icon you can imagine in the SF Symbol groups and browse thousands of different glyphs."
        image={mockup}
        alignment="left"
      ></MockupFeature>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/test" element={<TestElement />} />
          <Route path="/apps" element={<TestElement />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
