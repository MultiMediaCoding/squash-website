import "./AppHeader.css";
import { CommingSoonButton } from "./CommingSoonButton/CommingSoonButton";
import downloadBadge from "/images/Apps/Common/AppStoreDownloadBadge.svg";

export function AppHeader({
  name,
  slogan,
  icon,
  link,
  isProduction,
}: {
  name: string;
  slogan: string;
  icon: string;
  link: string;
  isProduction: boolean;
}) {
  return (
    <div className="box">
      <img className={"icon"} src={icon}></img>
      <h1
        style={{ marginTop: "29px" }}
        className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl"
      >
        {name}
      </h1>
      <p style={{ marginTop: "6px" }} className="text-xl text-muted-foreground">
        {slogan}
      </p>
      {isProduction ? (
        <a href={link} target="_blank" rel="noopener noreferrer">
          <img
            className="downloadBadge"
            src={downloadBadge}
            alt="Download from App Store"
          />
        </a>
      ) : (
        <CommingSoonButton></CommingSoonButton>
      )}
    </div>
  );
}
