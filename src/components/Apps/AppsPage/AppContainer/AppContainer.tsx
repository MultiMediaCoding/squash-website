import { useNavigate } from "react-router-dom";
import "./AppContainer.css";
import { App } from "../../model/App";

export function AppContainer({ app }: { app: App }) {
  const navigate = useNavigate();
  const goToAppPage = () => {
    navigate(`${app.name}`, { state: { app: app } });
  };

  return (
    <button onClick={goToAppPage} className={"app"}>
      <div className={"iconContainer"}>
        <img className={"containerAppIcon"} src={app.icon}></img>
      </div>
      <div className="text-lg font-semibold">{app.name}</div>
      <small
        style={{ color: "#A0A0A0", lineHeight: "1.4" }}
        className="text-sm font-regular leading-none"
      >
        {app.shortDescription}
      </small>
    </button>
  );
}
