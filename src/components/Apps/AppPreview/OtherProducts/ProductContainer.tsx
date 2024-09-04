import { App } from "../../model/App";
import "./ProductContainer.css";
import isymbols from "/images/iSymbols.png";

export function ProductContainer({ app }: { app: App }) {
  return (
    <div className={"productContainer"}>
      <img src={app.icon} className={"appIcon"} />
      <div>
        <div className="text-lg font-semibold">iSymbols</div>
        <p
          style={{ color: "#AFAFAF", marginTop: "-4px" }}
          className="text-sm font-regular"
        >
          {app.name}
        </p>
      </div>
    </div>
  );
}
