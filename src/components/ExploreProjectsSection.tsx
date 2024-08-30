import "./ExploreProjectsSection.css";
import iphone from "../assets/iphone.png";
import { Button } from "./ui/button";

export function ExploreProjectsSection() {
  return (
    <div className="exploreProjectsSection">
      <img className={"phoneBox"} src={iphone} alt="iPhone" />

      <div className={"text"}>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Explore Projects
        </h1>

        <div>
          <div className="text-lg font-semibold">
            Discover what we are working on
          </div>
          <p className="text-sm text-muted-foreground">
            Interested in the native experiences we build for Apple platforms.
            Then take a look in our app collection!
          </p>
        </div>
        <Button>Explore Apps</Button>
      </div>
    </div>
  );
}
