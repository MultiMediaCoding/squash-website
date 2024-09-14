import React from "react";
import "./Impressum.css";
import { NavigationBar } from "../Navigation/NavigationBar";

export const Impressum: React.FC = () => {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <br></br>
      <br></br>
      <div className="impressumText">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Impressum
        </h1>
        <p className="text-xl text-muted-foreground">
          Hans Poreda &amp; Lovis Steinmayer Softwareentwicklung GbR
          <br />
          Schneehalde 23d
          <br />
          88131 Lindau (Bodensee)
        </p>

        <p className="text-xl text-muted-foreground">
          <strong>Vertreten durch:</strong>
          <br />
          Hans Poreda
          <br />
          Lovis Steinmayer
        </p>

        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
          Kontakt
        </h2>
        <p className="text-xl text-muted-foreground">
          Telefon: +49 (0) 83823793
          <br />
          E-Mail:{" "}
          <a href="mailto:hlps.developers@gmail.com" className="underline">
            hlps.developers@gmail.com
          </a>
        </p>

        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
          Umsatzsteuer-ID
        </h2>
        <p className="text-xl text-muted-foreground">
          Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
          <br />
          DE999999999
        </p>

        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
          Verbraucher­streit­beilegung/Universal­schlichtungs­stelle
        </h2>
        <p className="text-xl text-muted-foreground">
          Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
          vor einer Verbraucherschlichtungsstelle teilzunehmen.
        </p>

        <p className="text-sm text-muted-foreground">
          Quelle:{" "}
          <a
            href="https://www.e-recht24.de"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            https://www.e-recht24.de
          </a>
        </p>
      </div>
    </div>
  );
};
