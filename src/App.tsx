import "./App.css";
import { DevelopersHeader } from "./components/Home/DevelopersHeader";
import { NavigationBar } from "./components/Navigation/NavigationBar";
import { AboutPage } from "./components/About/AboutPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { FAQ } from "./components/Home/FAQ";
import { SupportPage } from "./components/Support/SupportPage";
import { AppsPage } from "./components/Apps/AppsPage/AppsPage";
import { AppPreviewPage } from "./components/Apps/AppPreview/view/AppPreviewPage";
import { apps } from "./components/Apps/model/Apps";
import ScrollToTop from "./components/Common/ScrollToTop";
import { AppBoxes } from "./components/AppBoxes";

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
          {apps.map((app) => (
            <Route path={`/apps/${app.name}`} element={<AppPreviewPage />} />
          ))}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
