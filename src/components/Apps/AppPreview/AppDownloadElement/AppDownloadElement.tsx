import downloadBadge from "/images/AppStoreDownloadBadge.svg";
import icon from "/images/iSymbols.png";
import "./AppDownloadElement.css";

export function AppDownloadElement() {
  return (
    <div className="download-box">
      <img className="icon" src={icon} alt="App Icon" />

      <h1
        style={{ marginTop: "29px" }}
        className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl"
      >
        iSymbols
      </h1>

      <a href="https://example.com" target="_blank" rel="noopener noreferrer">
        <img
          className="downloadBadge"
          src={downloadBadge}
          alt="Download from App Store"
        />
      </a>
    </div>
  );
}
