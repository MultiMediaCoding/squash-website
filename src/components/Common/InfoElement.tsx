import { CSSProperties } from "react";
import "./InfoElement.css";

export function InfoElement({
  title,
  longTitle,
  description,
  textAlign,
}: {
  title: string;
  longTitle: string;
  description: string;
  textAlign?: string;
}) {
  return (
    <div
      style={{
        textAlign: (textAlign as CSSProperties["textAlign"]) ?? "center",
      }}
      className="infoElement"
    >
      <h1
        style={{ fontSize: 40, marginBottom: "18px" }}
        className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl"
      >
        {" "}
        {title}
      </h1>
      <h4
        style={{ fontSize: 20 }}
        className="scroll-m-20 text-xl font-mediumbold tracking-tight"
      >
        {longTitle}
      </h4>
      <p
        style={{
          fontSize: 18,
          color: "#AFAFAF",
          paddingLeft: textAlign == "center" ? 40 : 0,
          paddingRight: textAlign == "center" ? 40 : 0,
        }}
      >
        {description}
      </p>
    </div>
  );
}
