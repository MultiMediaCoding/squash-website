import "./AboutPage.css";
import "./AboutPhoto.css";

import founders from "/images/founders.jpeg";
import founders2 from "/images/founders2.jpeg";
import { AboutPhoto } from "./AboutPhoto";
import { NavigationBar } from "../Navigation/NavigationBar";

export function AboutPage() {
  return (
    <div className="text">
      <NavigationBar></NavigationBar>
      <br></br>
      <br></br>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        About
      </h1>
      <p className="text-xl text-muted-foreground">
        Welcome to our company! We are a passionate team dedicated to delivering
        exceptional products and services to our customers. Our mission is to
        innovate, inspire, and exceed expectations in everything we do. We
        believe in the power of creativity, collaboration, and commitment to
        quality. With a focus on customer satisfaction, we strive to build
        long-lasting relationships and make a positive impact in our industry.
        Whether you’re a long-time supporter or new to our community, we’re
        excited to have you with us on this journey. Thank you for being a part
        of our story!
      </p>
      <div className="aboutPagePhotos">
        <AboutPhoto
          image={founders}
          subtitle="Hans und Lovis 2016"
        ></AboutPhoto>
        <AboutPhoto
          image={founders2}
          subtitle="Hans und Lovis 2024"
        ></AboutPhoto>
      </div>
    </div>
  );
}
