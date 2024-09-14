import "./App.css";
import { DevelopersHeader } from "./components/Home/DevelopersHeader";
import { NavigationBar } from "./components/Navigation/NavigationBar";
import { AboutPage } from "./components/About/AboutPage";
import { Impressum } from "./components/Impressum/Impressum";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import { SupportPage } from "./components/Support/SupportPage";
import { AppsPage } from "./components/Apps/AppsPage/AppsPage";
import { AppPreviewPage } from "./components/Apps/AppPreview/view/AppPreviewPage";
import { apps } from "./components/Apps/model/Apps";
import ScrollToTop from "./components/Common/ScrollToTop";
import { AppBoxes } from "./components/AppBoxes";
import { Footer } from "./components/Home/Footer/Footer";
import { Datenschutzbestimmungen } from "./components/Datenschutzbestimmungen/Datenschutzbestimmungen";
import { FAQ } from "./components/Home/Footer/FAQ";

export function Home() {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <DevelopersHeader></DevelopersHeader>
      <AppBoxes></AppBoxes>
      <br></br>
      <br></br>
      <FAQ></FAQ>
      <br></br>
      <br></br>
      <Footer></Footer>
    </div>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apps" element={<AppsPage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutzbestimmungen />} />
          {apps.map((app) => (
            <Route path={`/apps/${app.name}`} element={<AppPreviewPage />} />
          ))}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
