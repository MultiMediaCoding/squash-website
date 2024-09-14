import { Link } from "react-router-dom";
import "./Footer.css";

export function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Legal
        </h3>
        <Link className="text-xl text-muted-foreground" to="/impressum">
          Impressum
        </Link>
        <Link className="text-xl text-muted-foreground" to="/datenschutz">
          Datenschutz
        </Link>
      </div>
    </div>
  );
}
