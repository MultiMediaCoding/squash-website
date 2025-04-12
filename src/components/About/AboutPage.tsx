import "./AboutPage.css";

import { AboutPhoto } from "./AboutPhoto";
import { NavigationBar } from "../Navigation/NavigationBar";
import { Footer } from "../Home/Footer/Footer";

export function AboutPage() {
  return (
    <div className="text">
      <NavigationBar></NavigationBar>
      <br></br>
      <h1 className="text-4xl font-bold">About</h1>
      <p className="text-xl text-muted-foreground">
        Squash was founded in 2024 by Hans Poreda and Lovis Steinmayer. Our
        passion for software became apparent early on: we constantly gained new
        experience through smaller software projects. To further professionalize
        ourselves, we decided to found our own company. Our conviction is to
        develop user-oriented, intuitively functioning software that has a
        tangible impact on our environment and the way things are done. We
        integrate topics that move us, such as sustainability, sport and
        technology, into our work. To make our software as seamlessly as
        possible, we rely on native components that are optimally adapted to the
        device and the user.
      </p>
      <div className="aboutPagePhotos">
        <AboutPhoto
          image={"/images/About/Hans und Lovis.jpeg"}
          subtitle="Hans und Lovis, 2025"
        ></AboutPhoto>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Footer></Footer>
    </div>
  );
}
