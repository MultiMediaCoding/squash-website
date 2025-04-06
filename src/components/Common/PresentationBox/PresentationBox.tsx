import "./PresentationBox.css";
import { CSSProperties, useEffect, useState } from "react";
import { Button } from "../../ui/button";
import { useNavigate } from "react-router-dom";
import { App } from "../../Apps/model/App";

export function PresentationBox({
  image,
  title,
  subtitle,
  description,
  app,
  alignment,
}: {
  image: string;
  title: string;
  subtitle: string;
  description: string;
  app: App;

  alignment: CSSProperties["textAlign"];
}) {
  const navigate = useNavigate();
  const goToAppPage = () => {
    navigate(`apps/${app.name}`, { state: { app: app } });
  };

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
        <h1 className="text-4xl font-bold">{title}</h1>
        <div>
          <div className="text-lg font-semibold">{subtitle}</div>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
        <Button style={{ width: "120px" }} onClick={goToAppPage}>
          Learn More
        </Button>
      </div>
      {alignment == "right" ? (
        <img className={"imageBox right"} src={image} />
      ) : null}
    </div>
  );
}
