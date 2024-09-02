import { ProductContainer } from "./ProductContainer";
import "./OtherProducts.css";

export function OtherProducts() {
  return (
    <div>
      <div
        style={{ textAlign: "left", marginBottom: "13px" }}
        className="text-lg font-regular"
      >
        Other Products
      </div>
      <div className="appsList">
        <ProductContainer></ProductContainer>
        <ProductContainer></ProductContainer>
      </div>
    </div>
  );
}