import React from "react";
import "./Impressum.css";
import { NavigationBar } from "../Navigation/NavigationBar";
import { Footer } from "../Home/Footer/Footer";

export const Impressum: React.FC = () => {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <br></br>
      <br></br>
      <div className="impressumText">
        <h1 className="text-4xl font-bold">Impressum</h1>
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
          Telefon:{" "}
          <a href="tel:+4983823793" className="gray-link">
            +49 (0) 8382 3793
          </a>
          <br />
          E-Mail:{" "}
          <a href="mailto:hlps.developers@gmail.com" className="gray-link">
            hlps.developers@gmail.com
          </a>
        </p>

        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
          Umsatzsteuer-ID
        </h2>
        <p className="text-xl text-muted-foreground">
          Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
          <br />
          DE424104539
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
            className="gray-link"
          >
            https://www.e-recht24.de
          </a>
        </p>
      </div>
      <br />
      <br />
      <Footer />
    </div>
  );
};
