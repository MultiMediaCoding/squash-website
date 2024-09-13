import { CSSProperties } from "react";
import { isymbols } from "../components/Apps/model/apps/iSymbols";
import { skationary } from "../components/Apps/model/apps/Skationary";
import { PresentationBox } from "./PresentationBox";
import isymbolsMockup from "/images/Home/iSymbolsMockup.png";
import skationaryMockup from "/images/Home/SkationaryMockup.png";

const cards = [
  {
    image: isymbolsMockup,
    title: "iSymbols",
    subtitle: "Your Ultimate iOS Companion for Stunning Icon Design",
    description:
      "Unleash your creativity with iSymbols, the ultimate iOS app for crafting stunning icons effortlessly using Apple's SF Symbols library.",
    app: isymbols,
    alignItems: "left",
  },
  {
    image: skationaryMockup,
    title: "Skationary",
    subtitle: "Your smart progress tracker for skateboarding",
    description:
      "Skationary makes tracking tricks you learn effortless and fun by letting you add video clips and automatically organizing them for you.",
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
