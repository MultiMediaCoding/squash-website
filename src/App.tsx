import "./App.css";
import { AppHeader } from "./components/AppHeader";
import { ExploreProjectsSection } from "./components/ExploreProjectsSection";
import { LandingSlogan } from "./components/LandingSlogan";
import { NavigationBar } from "./components/NavigationBar";
import isymbols from "./assets/isymbols.png";
import { AboutPage } from "./components/AboutPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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

export function Home() {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <LandingSlogan></LandingSlogan>
      <ExploreProjectsSection></ExploreProjectsSection>
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
