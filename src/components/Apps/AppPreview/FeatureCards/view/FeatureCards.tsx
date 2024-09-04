import { App } from "../../../model/App";
import "./FeatureCards.css";
import SingleFeatureCard from "./SingleCard/SingleFeatureCard";

export function FeatureCards({ app }: { app: App }) {
  return (
    <div className={"featureCards"}>
      {app.features.map((feature, _) => (
        <SingleFeatureCard
          title={feature.name}
          description={feature.description}
          image={feature.image}
        ></SingleFeatureCard>
      ))}
    </div>
  );
}
