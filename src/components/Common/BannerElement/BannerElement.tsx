import { CSSProperties } from "react";

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
    <div className="grey-box">
      <div
        style={{ textAlign: textAlign as CSSProperties["textAlign"] }}
        className="grey-box-content"
      >
        <div className="text-lg font-medium">{title}</div>
        <p style={{ color: "#868686" }}>{content}</p>
      </div>
    </div>
  );
}
