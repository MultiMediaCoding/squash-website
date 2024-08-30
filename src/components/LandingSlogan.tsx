"use client";
import developer from "../assets/Developer.png";
import "./LandingSlogan.css";

export function LandingSlogan() {
  return (
    <div className="centered">
      <img src={developer} alt="Developer" />
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Two young developers
      </h1>
      <p className="text-xl text-muted-foreground">
        Building apps that matter.
      </p>
    </div>
  );
}
