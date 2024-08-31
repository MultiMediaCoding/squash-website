import "./PresentationBox.css";
import { CSSProperties, useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

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
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          {title}
        </h1>
        <div>
          <div className="text-lg font-semibold">{subtitle}</div>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
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
