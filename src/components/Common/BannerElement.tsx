import { CSSProperties } from "react";
import "./BannerElement.css";

export function BannerElement({
  title,
  content,
  textAlign,
}: {
  title: string;
  content: string;
  textAlign?: string;
}) {
  return (
    <div className="banner">
      <div
        style={{ textAlign: textAlign as CSSProperties["textAlign"] }}
        className="banner-content"
      >
        <div className="text-lg font-medium">{title}</div>
        <p style={{ color: "#868686" }}>{content}</p>
      </div>
    </div>
  );
}
