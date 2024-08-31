import { CSSProperties, useEffect, useState } from "react";
import { InfoElement } from "../Common/InfoElement";
import "./MockupFeature.css";

export function MockupFeature({
  image,
  title,
  subtitle,
  description,
  alignment,
}: {
  image: string;
  title: string;
  subtitle: string;
  description: string;
  alignment: CSSProperties["textAlign"];
}) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup-Funktion, um den Event Listener zu entfernen, wenn die Komponente entladen wird
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="mockupBox">
      {alignment == "left" || isMobile ? (
        <img className={"mockupImage"} src={image} />
      ) : null}

      <InfoElement
        title={title}
        longTitle={subtitle}
        description={description}
        textAlign="left"
      ></InfoElement>
      {alignment == "right" ? (
        <img className={"mockupImage right"} src={image} />
      ) : null}
    </div>
  );
}
