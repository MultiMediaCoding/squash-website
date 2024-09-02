import { Link } from "react-router-dom";
import { NavigationBar } from "../../Navigation/NavigationBar";
import { AppContainer } from "./AppContainer/AppContainer";
import "./AppsPage.css";

export function AppsPage({ appIcon }: { appIcon: string }) {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <br></br>
      <br></br>
      <div className={"appsHeader"}>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Apps
        </h1>
        <p
          style={{
            fontSize: 18,
            color: "#AFAFAF",
          }}
        >
          Elegantly crafted for Apple power users seeking intuitive performance.
        </p>
      </div>
      <br></br>
      <br></br>
      <div className={"appsGrid"}>
        <Link to="/apps/isymbols">
          <AppContainer appIcon={appIcon}></AppContainer>
        </Link>
        <AppContainer appIcon={appIcon}></AppContainer>
        <AppContainer appIcon={appIcon}></AppContainer>
        <AppContainer appIcon={appIcon}></AppContainer>
        <AppContainer appIcon={appIcon}></AppContainer>
        <AppContainer appIcon={appIcon}></AppContainer>
      </div>
    </div>
  );
}
