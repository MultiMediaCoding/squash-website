import "./App.css";
import { AboutPage } from "./components/About/AboutPage";
import { Impressum } from "./components/Impressum/Impressum";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SupportPage } from "./components/Support/SupportPage";
import { AppsPage } from "./components/Apps/AppsPage/AppsPage";
import { AppPreviewPage } from "./components/Apps/AppPreview/view/AppPreviewPage";
import { apps } from "./components/Apps/model/Apps";
import ScrollToTop from "./components/Common/ScrollToTop";
import { Home } from "./components/Home/Home";
import { Datenschutzbestimmungen } from "./components/Common/Datenschutzbestimmungen/Datenschutzbestimmungen";
import { Credits } from "./components/Common/Credits/Credits";

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
          <Route path="/credits" element={<Credits />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutzbestimmungen />} />
          {apps.map((app) => (
            <Route
              key={app.name}
              path={`/apps/${app.name}`}
              element={<AppPreviewPage app={app} />}
            />
          ))}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
