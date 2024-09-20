import { AppBoxes } from "./AppBoxes";
import { NavigationBar } from "../Navigation/NavigationBar";
import { DevelopersHeader } from "./DevelopersHeader/DevelopersHeader";
import { FAQ } from "../Common/FAQ/FAQ";
import { Footer } from "./Footer/Footer";

export function Home() {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <DevelopersHeader></DevelopersHeader>
      <AppBoxes></AppBoxes>
      <br></br>
      <br></br>
      <FAQ></FAQ>
      <br></br>
      <br></br>
      <Footer></Footer>
    </div>
  );
}
