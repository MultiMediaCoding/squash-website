import { NavigationBar } from "../../Navigation/NavigationBar";
import { AppContainer } from "./AppContainer/AppContainer";
import "./AppsPage.css";
import { apps } from "../model/Apps";
import { Footer } from "../../Home/Footer/Footer";

export function AppsPage() {
  return (
    <div>
      <NavigationBar></NavigationBar>

      <br></br>
      <div className={"appsHeader"}>
        <h1 className="text-4xl font-bold">Apps</h1>
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
        {apps.map((app) => (
          <AppContainer key={app.name} app={app}></AppContainer>
        ))}
      </div>

      <br></br>
      <br></br>
      <Footer></Footer>
    </div>
  );
}
