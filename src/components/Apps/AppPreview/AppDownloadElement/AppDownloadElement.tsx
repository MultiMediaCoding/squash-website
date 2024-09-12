import downloadBadge from "/images/AppStoreDownloadBadge.svg";
import "./AppDownloadElement.css";
import { App } from "../../model/App";

export function AppDownloadElement({ app }: { app: App }) {
  return (
    <div className="download-box">
      <img className="icon" src={app.icon} alt="App Icon" />

      <h1
        style={{ marginTop: "29px" }}
        className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl"
      >
        {app.name}
      </h1>

      <a href={app.link} target="_blank" rel="noopener noreferrer">
        <img
          className="downloadBadge"
          src={downloadBadge}
          alt="Download from App Store"
        />
      </a>
    </div>
  );
}
