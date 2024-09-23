import { Deployment, DeploymentTarget } from "../../../model/App";
import { DownloadBadges } from "../../DownloadBadge/DownloadBadges";
import "./AppHeader.css";
import { CommingSoonButton } from "./CommingSoonButton/CommingSoonButton";
import downloadBadge from "/images/Apps/Common/AppStoreDownloadBadge.svg";

export function AppHeader({
  name,
  slogan,
  icon,
  deployments,
  isProduction,
}: {
  name: string;
  slogan: string;
  icon: string;
  deployments: Deployment[];
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
            <div className="deployment-badges">
    <DownloadBadges deployments={deployments}></DownloadBadges>
    </div>
      ) : (
        <CommingSoonButton></CommingSoonButton>
      )}
    </div>
  );
}
