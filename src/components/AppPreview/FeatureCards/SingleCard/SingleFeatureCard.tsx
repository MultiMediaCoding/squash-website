import React from "react";
import "./SingleFeatureCard.css";

export interface FeatureCardProps {
  image: string;
  title: string;
  description: string;
}

const SingleFeatureCard: React.FC<FeatureCardProps> = ({
  image,
  title,
  description,
}) => {
  return (
    <div className={"card"}>
      <img className={"featureCardImg"} src={image} />
      <h4 className="scroll-m-20  font-semibold tracking-tight">{title}</h4>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

export default SingleFeatureCard;
