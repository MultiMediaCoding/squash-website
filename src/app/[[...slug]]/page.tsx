import "../../index.css";
import { ClientOnly } from "./client";

export function generateStaticParams() {
  return [
    { slug: [""] },
    { slug: ["apps"] },
    { slug: ["support"] },
    { slug: ["about"] },
    { slug: ["credits"] },
    { slug: ["impressum"] },
    { slug: ["datenschutz"] },
    { slug: ["apps", "Bodensee Temperatur"] },
    { slug: ["apps", "HiddenDesk"] },
    { slug: ["apps", "iSymbols"] },
    { slug: ["apps", "iTask"] },
    { slug: ["apps", "Lindenhofpark"] },
    { slug: ["apps", "Notely"] },
    { slug: ["apps", "Skationary"] },
    { slug: ["apps", "Loipen"] },
  ];
}

export default function Page() {
  return <ClientOnly />;
}
