import { Deployment, DeploymentTarget } from "../../../model/App";
import { DownloadBadges } from "../../DownloadBadge/DownloadBadges";
import "./AppHeader.css";

export function AppHeader({
  name,
  slogan,
  icon,
  deployments,
}: {
  name: string;
  slogan: string;
  icon: string;
  deployments: Deployment[];
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
    <div className="deployment-badges">
    <DownloadBadges deployments={deployments}></DownloadBadges>
    </div>
    </div>
  );
}
