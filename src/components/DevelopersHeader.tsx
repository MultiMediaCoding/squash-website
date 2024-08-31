"use client";
import developers from "../assets/Developers.png";
import "./DevelopersHeader.css";

export function DevelopersHeader() {
  return (
    <div className="centered">
      <img className={"img"} src={developers} alt="Developer" />
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Two young developers
      </h1>
      <p className="text-xl text-muted-foreground">
        Building apps that matter.
      </p>
    </div>
  );
}
