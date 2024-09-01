import "./ProductContainer.css";
import isymbols from "../../../assets/isymbols.png";

export function ProductContainer() {
  return (
    <div className={"productContainer"}>
      <img src={isymbols} className={"appIcon"} />
      <div>
        <div className="text-lg font-semibold">iSymbols</div>
        <p
          style={{ color: "#AFAFAF", marginTop: "-4px" }}
          className="text-sm font-regular"
        >
          Icons made easy
        </p>
      </div>
    </div>
  );
}
