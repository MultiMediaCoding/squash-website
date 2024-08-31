import React from "react";
import "./FeatureCard.css";

interface FeatureCardProps {
  image: string;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  image,
  title,
  description,
}) => {
  return (
    <div className={"card"}>
      <img className={"img"} src={image} />
      <h4
        style={{ marginTop: "14px" }}
        className="scroll-m-20 text-xl font-semibold tracking-tight"
      >
        {title}
      </h4>
      <p className="text-sm text-muted-foreground">Enter your email address.</p>
    </div>
  );
};

export default FeatureCard;
