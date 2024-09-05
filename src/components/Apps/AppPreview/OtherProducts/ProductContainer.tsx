import { useNavigate } from "react-router-dom";
import { App } from "../../model/App";
import "./ProductContainer.css";

export function ProductContainer({ app }: { app: App }) {
  const navigate = useNavigate();
  const goToAppPage = () => {
    navigate(`/apps/${app.name}`, { state: { app: app } });
  };

  return (
    <button onClick={goToAppPage}>
      <div className={"productContainer"}>
        <img src={app.icon} className={"appIcon"} />
        <div>
          <div className="text-lg font-semibold">{app.name}</div>
          <p
            style={{ color: "#AFAFAF", marginTop: "-4px" }}
            className="text-sm font-regular"
          >
            {app.shortDescription}
          </p>
        </div>
      </div>
    </button>
  );
}
