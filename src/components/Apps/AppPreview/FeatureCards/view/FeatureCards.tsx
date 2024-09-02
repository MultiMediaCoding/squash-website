import "./FeatureCards.css";
import SingleFeatureCard from "./SingleCard/SingleFeatureCard";
import toggle from "/images/Toggle.png";

export function FeatureCards() {
  return (
    <div className={"featureCards"}>
      <SingleFeatureCard
        image={toggle}
        title={"Auto Login"}
        description={"Use your fingerprint to login to your account"}
      ></SingleFeatureCard>
      <SingleFeatureCard
        image={toggle}
        title={"Auto Login"}
        description={"Use your fingerprint to login to your account"}
      ></SingleFeatureCard>
      <SingleFeatureCard
        image={toggle}
        title={"Auto Login"}
        description={"Use your fingerprint to login to your account"}
      ></SingleFeatureCard>
    </div>
  );
}
