import { CSSProperties } from "react";
import { isymbols } from "../Apps/model/apps/iSymbols";
import { skationary } from "../Apps/model/apps/Skationary";
import { PresentationBox } from "../Common/PresentationBox/PresentationBox";

const cards = [
  {
    image: "/images/Home/iSymbolsMockup.png",
    title: "iSymbols for iOS",
    subtitle: "Your companion for Icon Design",
    description: "Effortlessly craft stunning icons using Apple's SF Symbols.",
    app: isymbols,
    alignItems: "left",
  },
  {
    image: "/images/Home/SkationaryMockup.png",
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
          key={card.title}
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
