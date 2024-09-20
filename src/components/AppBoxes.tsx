import { CSSProperties } from "react";
import { isymbols } from "../components/Apps/model/apps/iSymbols";
import { skationary } from "../components/Apps/model/apps/Skationary";
import { PresentationBox } from "./PresentationBox";
import isymbolsMockup from "/images/Home/iSymbolsMockup.png";
import skationaryMockup from "/images/Home/SkationaryMockup.png";

const cards = [
  {
    image: isymbolsMockup,
    title: "iSymbols for iOS",
    subtitle: "Your companion for Icon Design",
    description:
      "Effortlessly craft stunning icons using Apple's SF Symbols.",
    app: isymbols,
    alignItems: "left",
  },
  {
    image: skationaryMockup,
    title: "Skationary",
    subtitle: "Your smart progress tracker for skateboarding",
    description:
      "Track your video clips and let the app organize them for you.",
    app: skationary,
    alignItems: "right",
  },
];

export function AppBoxes() {
  return (
    <div>
      {cards.map((card) => (
        <PresentationBox
          image={card.image}
          title={card.title}
          subtitle={card.subtitle}
          description={card.description}
          app={card.app}
          alignment={card.alignItems as CSSProperties["textAlign"]}
        ></PresentationBox>
      ))}
    </div>
  );
}
