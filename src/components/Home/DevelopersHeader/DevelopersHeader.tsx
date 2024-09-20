"use client";
import "./DevelopersHeader.css";

export function DevelopersHeader() {
  return (
    <div className="centered">
      <h1 style={{ fontSize: "9em", marginBottom: "-60px" }}>⌨️</h1>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Two young developers
      </h1>
      <p
        className="text-xl text-muted-foreground"
        style={{ marginBottom: "80px" }}
      >
        Building apps that matter.
      </p>
    </div>
  );
}