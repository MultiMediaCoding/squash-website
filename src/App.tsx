import "./App.css";
import { CSSProperties } from "react";
import { PresentationBox } from "./components/PresentationBox";
import { DevelopersHeader } from "./components/Home/DevelopersHeader";
import { NavigationBar } from "./components/Navigation/NavigationBar";
import { AboutPage } from "./components/About/AboutPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import iphone from "./assets/iphone.png";
import { InfoElement } from "./components/Common/InfoElement";
import { FAQ } from "./components/Home/FAQ";
import { AppHeader } from "./components/AppPreview/AppHeader";
import isymbols from "./assets/isymbols.png";
import FeatureCard from "./components/AppPreview/FeatureCard";
import toggle from "./assets/toggle.png";

import mockup from "./assets/mockup.png";
import { PhotoCarousel } from "./components/AppPreview/PhotoCarousel";
import { MockupFeature } from "./components/AppPreview/MockupFeature";
import { AppDetailTable } from "./components/Common/AppDetailTable";
import { AppDownloadElement } from "./components/AppPreview/AppDownloadElement";
import { Comment } from "./components/AppPreview/CommentSection/Comment/Comment";
import { CommentSection } from "./components/AppPreview/CommentSection/CommentSection";
import { OtherProducts } from "./components/AppPreview/OtherProducts/OtherProducts";

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
  const comments = [
    {
      title: "Fantastic Tool!",
      description:
        "This app has every icon I need for my projects. A must-have for designers!",
      rating: 5,
    },
    {
      title: "Very useful",
      description:
        "A great collection of SF Symbols, perfect for my app development needs.",
      rating: 4,
    },
    {
      title: "Love the simplicity!",
      description:
        "The app is straightforward and easy to navigate. Found all the symbols I was looking for in seconds.",
      rating: 5,
    },
    {
      title: "Could be better",
      description:
        "The icons are great, but I wish there were more customization options.",
      rating: 3,
    },
    {
      title: "Great for quick access",
      description:
        "Perfect app for quickly finding the right symbol. Saves me so much time!",
      rating: 4,
    },
  ];
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
        description="Keeps your Mac desktop tidy and hides all folders and documents wit just a Mousecklick."
      ></InfoElement>
      <br></br>
      <br></br>
      <PhotoCarousel></PhotoCarousel>
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
      <br></br>
      <br></br>
      <AppDownloadElement></AppDownloadElement>
      <br></br>
      <br></br>
      <AppDetailTable 
      version="3.0" 
      size="2GB" 
      category="Utility"
      price="$0.99"
      ></AppDetailTable>
      <CommentSection comments={comments}></CommentSection>
      <br></br>
      <br></br>
      <OtherProducts></OtherProducts>
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
