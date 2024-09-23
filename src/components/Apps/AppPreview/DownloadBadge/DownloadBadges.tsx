import { Deployment, DeploymentTarget } from "../../model/App";
import appStoreDownloadBadge from "/images/Apps/Common/AppStoreDownloadBadge.svg";
import playStoreDownloadBadge from "/images/Apps/Common/GooglePlayStoreDownloadBadge.svg";
import "./DownloadBadges.css"

export function DownloadBadges({
  deployments
}: {
    deployments: Deployment[]
}) {
  return (
    <div className="badges-row">
        {deployments.map((deployment) => <div className="badges-container">
        {deployment.target == DeploymentTarget.iOS ? (
          <a href={deployment.link} target="_blank" rel="noopener noreferrer">
            <img
              className="downloadBadge"
              src={appStoreDownloadBadge}
              alt="Download from App Store"
            />
          </a>
        ) : null}
  
        {deployment.target == DeploymentTarget.android ? (
          <a href={deployment.link} target="_blank" rel="noopener noreferrer">
            <img
              className="downloadBadge"
              src={playStoreDownloadBadge}
              alt="Download from Play Store"
            />
          </a>
        ) : null}
      
      </div>)}
    </div>
   
  );
}