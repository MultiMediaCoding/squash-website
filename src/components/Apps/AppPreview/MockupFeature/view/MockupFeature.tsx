import { useEffect, useState } from "react";
import { InfoElement } from "../../../../Common/InfoElement/InfoElement";
import "./MockupFeature.css";
import { MockupFeatureProps } from "../model/MockupFeatureProps";

export function MockupFeature({
  mockupFeatureProps,
}: {
  mockupFeatureProps: MockupFeatureProps;
}) {
  const { image, title, subtitle, description, alignment, softwareTarget } = mockupFeatureProps;
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const mockupImageClass = isMobile
    ? (softwareTarget === "macOS" ? "macMobile" : "mockupImage") 
    : "mockupImage";

  return (
    <div className="mockupBox">
      {alignment === "left" || isMobile ? (
        <img className={mockupImageClass} src={image} alt={title} />
      ) : null}

      <InfoElement
        title={title}
        longTitle={subtitle}
        description={description}
        textAlign="left"
      />

      {alignment === "right" ? (
        <img className={`mockupImage right`} src={image} alt={title} />
      ) : null}
    </div>
  );
}