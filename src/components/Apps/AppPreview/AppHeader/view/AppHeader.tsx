import { Deployment } from "../../../model/App";
import { DownloadBadges } from "../../DownloadBadge/DownloadBadges";
import "./AppHeader.css";
import { ComingSoonButton } from "./ComingSoonButton/ComingSoonButton";

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

      <h1 style={{ marginTop: "29px" }} className="text-4xl font-bold">
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
        <ComingSoonButton />
      )}
    </div>
  );
}
