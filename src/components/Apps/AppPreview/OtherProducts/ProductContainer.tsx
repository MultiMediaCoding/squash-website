import "./ProductContainer.css";
import { Link } from "react-router-dom";
import { Product } from "../../model/App";

export function ProductContainer({ product }: { product: Product }) {
  return (
    <Link to={`/apps/${product.name}`}>
      <div className={"productContainer"}>
        <img src={product.icon} className={"appIcon"} />
        <div>
          <div className="text-lg font-semibold">{product.name}</div>
          <p
            style={{ color: "#AFAFAF", marginTop: "-4px" }}
            className="text-sm font-regular"
          >
            {product.shortDescription}
          </p>
        </div>
      </div>
    </Link>
  );
}
