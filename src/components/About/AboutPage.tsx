import "./AboutPage.css";
import "./AboutPhoto.css";

import hans from "/images/About/Hans.png";
import lovis from "/images/About/Lovis.jpeg";
import { AboutPhoto } from "./AboutPhoto";
import { NavigationBar } from "../Navigation/NavigationBar";
import { Footer } from "../Home/Footer/Footer";

export function AboutPage() {
  return (
    <div className="text">
      <NavigationBar></NavigationBar>
      <br></br>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        About
      </h1>
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
        <AboutPhoto image={hans} subtitle="Hans"></AboutPhoto>
        <AboutPhoto image={lovis} subtitle="Lovis"></AboutPhoto>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Footer></Footer>
    </div>
  );
}
