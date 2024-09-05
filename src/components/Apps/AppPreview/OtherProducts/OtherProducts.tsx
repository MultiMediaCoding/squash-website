import { ProductContainer } from "./ProductContainer";
import "./OtherProducts.css";
import { App } from "../../model/App";

export function OtherProducts({ app }: { app: App }) {
  return (
    <div>
      <div
        style={{ textAlign: "left", marginBottom: "13px" }}
        className="text-lg font-regular"
      >
        Other Products
      </div>
      <div className="appsList">
        {app.otherProducts.map((otherApp) => (
          <ProductContainer app={otherApp}></ProductContainer>
        ))}
      </div>
    </div>
  );
}
