import "./AppDownloadElement.css";
import { App } from "../../model/App";
import { DownloadBadges } from "../DownloadBadge/DownloadBadges";

export function AppDownloadElement({ app }: { app: App }) {
  return (
    <div className="download-box">
      <img className="icon" src={app.icon} alt="App Icon" />

      <h1 style={{ marginTop: "29px" }} className="text-4xl font-bold">
        {app.name}
      </h1>
      <DownloadBadges deployments={app.deployments}></DownloadBadges>
    </div>
  );
}
