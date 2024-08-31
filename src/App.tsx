import "./App.css";
import { CSSProperties } from "react";
import { PresentationBox } from "./components/PresentationBox";
import { DevelopersHeader } from "./components/DevelopersHeader";
import { NavigationBar } from "./components/NavigationBar";
import { AboutPage } from "./components/AboutPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import iphone from "./assets/iphone.png";

/*<AppHeader
        name={"iSymbols"}
        slogan={"Icons - easier than ever"}
        icon={isymbols}
      ></AppHeader>
      */
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

const cards = [
  {
    image: iphone,
    title: "iSymbols",
    subtitle: "The best icon library",
    description:
      "iSymbols is the best icon library in the world. It has a wide variety of icons that you can use in your projects.",
    buttonDestination: "/about",
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

export function Home() {
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
        </Routes>
      </div>
    </Router>
  );
}

export default App;
