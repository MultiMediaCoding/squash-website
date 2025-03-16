import React from "react";
import "./Datenschutzbestimmungen.css";
import { InfoElement } from "../InfoElement/InfoElement";
import { NavigationBar } from "../../Navigation/NavigationBar";
import { Footer } from "../../Home/Footer/Footer";

export const Datenschutzbestimmungen: React.FC = () => {
  return (
    <div className="datenschutzbestimmungen">
      <NavigationBar></NavigationBar>
      <br></br>
      <br></br>
      <InfoElement
        title={"Datenschutzerklärung"}
        longTitle={"Allgemeine Hinweise"}
        description={
          <>
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was
            mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website
            besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
            persönlich identifiziert werden können. Ausführliche Informationen
            zum Thema Datenschutz entnehmen Sie unserer unter diesem Text
            aufgeführten Datenschutzerklärung.
          </>
        }
        textAlign={"left"}
      />

      <h2
        className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0"
        style={{ marginTop: 80 }}
      >
        Datenerfassung auf dieser Website
      </h2>

      <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
        Wer ist verantwortlich für die Datenerfassung auf dieser Website?
      </h4>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Die Datenverarbeitung auf dieser Website erfolgt durch den
        Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt „Hinweis
        zur Verantwortlichen Stelle“ in dieser Datenschutzerklärung entnehmen.
      </p>

      <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
        Wie erfassen wir Ihre Daten?
      </h4>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese
        mitteilen. Hierbei kann es sich z.&nbsp;B. um Daten handeln, die Sie in
        ein Kontaktformular eingeben.
      </p>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch
        der Website durch unsere IT-Systeme erfasst. Das sind vor allem
        technische Daten (z.&nbsp;B. Internetbrowser, Betriebssystem oder
        Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt
        automatisch, sobald Sie diese Website betreten.
      </p>

      <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
        Wofür nutzen wir Ihre Daten?
      </h4>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der
        Website zu gewährleisten. Andere Daten können zur Analyse Ihres
        Nutzerverhaltens verwendet werden.
      </p>

      <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
        Welche Rechte haben Sie bezüglich Ihrer Daten?
      </h4>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft,
        Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu
        erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung
        dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur
        Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit
        für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter
        bestimmten Umständen die Einschränkung der Verarbeitung Ihrer
        personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein
        Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
      </p>
      <p>
        Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich
        jederzeit an uns wenden.
      </p>

      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
        Analyse-Tools und Tools von Drittanbietern
      </h3>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Beim Besuch dieser Website kann Ihr Surf-Verhalten statistisch
        ausgewertet werden. Das geschieht vor allem mit sogenannten
        Analyseprogrammen.
      </p>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Detaillierte Informationen zu diesen Analyseprogrammen finden Sie in der
        folgenden Datenschutzerklärung.
      </p>

      <h2
        className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0"
        style={{ marginTop: 40 }}
      >
        2. Hosting
      </h2>

      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
        Externes Hosting
      </h3>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Diese Seite nutzt zur Bereitstellung und dem Betrieb Firebase Hosting,
        einen Dienst von Google Inc. (1600 Amphitheatre Parkway Mountain View,
        CA 94043, USA). Beim Aufruf einer Seite lädt Ihr Browser die benötigten
        Daten, wie die HTML-Datei, Stylesheets zur Darstellung, JavaScript für
        die Darstellung von Elementen und Bilder und zeigt diese an.
      </p>

      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Zu diesem Zweck muss der von Ihnen verwendete Browser Verbindung zu den
        Servern von Firebase Hosting aufnehmen. Hierdurch erlangt Google
        Kenntnis darüber, dass über Ihre IP-Adresse meine Website aufgerufen
        wurde. Um einen sicheren Betrieb dieser Website zu gewährleisten,
        zeichnet Google Ihre IP-Adresse für einen von Google definierten
        Zeitraum auf.
      </p>

      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Die Aufzeichnung erfolgt in Europa. Die Speicherung erfolgt zur
        Sicherstellung des Betriebs und zur Abwehr von Gefahren für diese
        Website. Dies stellt ein berechtigtes Interesse im Sinne von Art. 6 Abs.
        1 lit. f DSGVO dar. Weitere Informationen finden Sie unter{" "}
        <a
          href="https://firebase.google.com/support/privacy/"
          target="_blank"
          className="gray-link"
        >
          https://firebase.google.com/support/privacy/
        </a>
        .
      </p>

      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Das EU-U.S. und Swiss-U.S. Privacy Shield Framework wurde gemeinsam vom
        U.S. Department of Commerce, der EU-Kommission und der Schweizer
        Regierung entwickelt, um Unternehmen, die in den jeweiligen
        Wirtschaftsräumen Dienste zur Verfügung stellen, einen Rahmen zu geben,
        in dem die Datenschutzanforderungen beim Transfer von personenbezogenen
        Daten, wie der IP-Adresse beim Hosting dieser Website, den
        Datenschutzanforderungen der EU, der Schweiz und den Vereinigten Staaten
        entsprechen. Google ist zertifiziertes Mitglied dieses Programms.
        Weitere Informationen zu diesem Programm finden Sie unter{" "}
        <a
          href="https://www.privacyshield.gov/Program-Overview"
          target="_blank"
          className="gray-link"
        >
          https://www.privacyshield.gov/Program-Overview
        </a>
        . Weitere Anforderungen zur Zertifizierung von Google finden Sie unter{" "}
        <a
          href="https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&status=Active"
          target="_blank"
          className="gray-link"
        >
          https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&status=Active
        </a>
        .
      </p>

      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
        Privacy-Shield-Abkommen
      </h3>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Soweit Daten in den USA verarbeitet werden, weisen wir darauf hin, dass
        Google unter dem Privacy-Shield-Abkommen zertifiziert ist und hierdurch
        zusichert, das europäische Datenschutzrecht einzuhalten (
        <a
          href="https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&status=Active"
          target="_blank"
          className="gray-link"
        >
          https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&status=Active
        </a>
        ).
      </p>

      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Die Datenschutzerklärung von Google ist unter{" "}
        <a
          href="https://policies.google.com/privacy"
          target="_blank"
          className="gray-link"
        >
          https://policies.google.com/privacy
        </a>{" "}
        abrufbar. Weitere Informationen zur Datennutzung zu Marketingzwecken
        durch Google erfahren Nutzer:innen auf der Übersichtsseite:{" "}
        <a
          href="https://policies.google.com/technologies/ads?hl=de"
          target="_blank"
          className="gray-link"
        >
          https://policies.google.com/technologies/ads?hl=de
        </a>
        .
      </p>

      <h2
        className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0"
        style={{ marginTop: 40 }}
      >
        3. Allgemeine Hinweise und Pflichtinformationen
      </h2>

      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
        Datenschutz
      </h3>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten
        sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und
        entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser
        Datenschutzerklärung.
      </p>

      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Wenn Sie diese Website benutzen, werden verschiedene personenbezogene
        Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie
        persönlich identifiziert werden können. Die vorliegende
        Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir
        sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.
      </p>

      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Wir weisen darauf hin, dass die Datenübertragung im Internet (z.&nbsp;B.
        bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein
        lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht
        möglich.
      </p>

      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
        Hinweis zur verantwortlichen Stelle
      </h3>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website
        ist:
      </p>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Hans Poreda & Lovis Steinmayer Softwareentwicklung GbR
        <br />
        Schneehalde 23d
        <br />
        88131 Lindau (Bodensee)
      </p>

      <p className="leading-7 [&:not(:first-child)]:mt-6">
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

      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Verantwortliche Stelle ist die natürliche oder juristische Person, die
        allein oder gemeinsam mit anderen über die Zwecke und Mittel der
        Verarbeitung von personenbezogenen Daten (z.&nbsp;B. Namen,
        E-Mail-Adressen o. Ä.) entscheidet.
      </p>

      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
        Speicherdauer
      </h3>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Soweit innerhalb dieser Datenschutzerklärung keine speziellere
        Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten bei
        uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein
        berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur
        Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern wir
        keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer
        personenbezogenen Daten haben (z.&nbsp;B. steuer- oder handelsrechtliche
        Aufbewahrungsfristen); im letztgenannten Fall erfolgt die Löschung nach
        Fortfall dieser Gründe.
      </p>

      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
        Allgemeine Hinweise zu den Rechtsgrundlagen der Datenverarbeitung auf
        dieser Website
      </h3>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Sofern Sie in die Datenverarbeitung eingewilligt haben, verarbeiten wir
        Ihre personenbezogenen Daten auf Grundlage von Art. 6 Abs. 1 lit. a
        DSGVO bzw. Art. 9 Abs. 2 lit. a DSGVO, sofern besondere Datenkategorien
        nach Art. 9 Abs. 1 DSGVO verarbeitet werden. Im Falle einer
        ausdrücklichen Einwilligung in die Übertragung personenbezogener Daten
        in Drittstaaten erfolgt die Datenverarbeitung außerdem auf Grundlage von
        Art. 49 Abs. 1 lit. a DSGVO. Sofern Sie in die Speicherung von Cookies
        oder in den Zugriff auf Informationen in Ihr Endgerät (z.&nbsp;B. via
        Device-Fingerprinting) eingewilligt haben, erfolgt die Datenverarbeitung
        zusätzlich auf Grundlage von §.
      </p>
      <br />
      <br />
      <Footer />
    </div>
  );
};
