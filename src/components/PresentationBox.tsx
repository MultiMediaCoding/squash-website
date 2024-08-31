import "./PresentationBox.css";
import { CSSProperties, useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { InfoElement } from "./InfoElement";

export function PresentationBox({
  image,
  title,
  subtitle,
  description,
  buttonDestination,
  alignment,
}: {
  image: string;
  title: string;
  subtitle: string;
  description: string;
  buttonDestination: string;
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
    <div className="presentationBox">
      {alignment == "left" || isMobile ? (
        <img className={"imageBox"} src={image} />
      ) : null}

      <div className="content">
        <InfoElement
          title={title}
          longTitle={subtitle}
          description={description}
          textAlign="left"
        ></InfoElement>
        <Link to={buttonDestination}>
          <Button style={{ width: "120px" }}>Learn More</Button>
        </Link>
      </div>
      {alignment == "right" ? (
        <img className={"imageBox right"} src={image} />
      ) : null}
    </div>
  );
}
