import "./AboutPage.css";
import founders from "../assets/founders.jpeg";

export function AboutPage() {
  return (
    <div className="text">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        About
      </h1>
      <p className="text-xl text-muted-foreground">
        Made by a real person. App ahead is a software studio led and founded by
        Martin Lexow. I craft opinionated apps that are honest and functional.
        My work is informed by German Sachlichkeit.
      </p>
      <div>
        <img className={"img"} src={founders} alt="Hans und Lovis 2016" />
        <p className="text-sm text-muted-foreground">Hans und Lovis 2016</p>
      </div>
    </div>
  );
}
