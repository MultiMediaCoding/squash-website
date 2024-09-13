import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

export function FAQ() {
  const donateContent = `We welcome donations to support our company’s mission, and by "mission," we mean our quest for the finest champagne! Your contributions will help us enjoy only the best bubbles. Each donation gets us one step closer to that dream of toasting our success in style. Thank you for your support!`;
  return (
    <div style={{ maxWidth: "1024px", margin: "0 auto" }}>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        FAQ
      </h1>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Hä? Digga ihr seid noch so jung</AccordionTrigger>
          <AccordionContent>Nööö</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Wieso macht ihr nix für Android?</AccordionTrigger>
          <AccordionContent>Weil Kotlin scheiße ist.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Ich möchte Geld spenden</AccordionTrigger>
          <AccordionContent>{donateContent}</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
