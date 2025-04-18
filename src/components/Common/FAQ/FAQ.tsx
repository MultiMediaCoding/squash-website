import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../ui/accordion";
import "./FAQ.css";

export function FAQ() {
  const calculateAge = (birthDate: string | number | Date) => {
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDifference = today.getMonth() - birth.getMonth();
    if (
      monthDifference < 0 ||
      (monthDifference === 0 && today.getDate() < birth.getDate())
    ) {
      age--;
    }
    return age;
  };

  const ourAge = calculateAge("2007-09-14");

  return (
    <div>
      <h1 className="text-4xl font-bold">FAQ</h1>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="accordion-trigger">
            Who is behind Squash GbR and what is your mission?
          </AccordionTrigger>
          <AccordionContent className="accordion-content">
            We are Hans Poreda and Lovis Steinmayer, two {ourAge}-year-old
            founders with a passion for software development. Our mission is to
            develop innovative software solutions for Apple users that simplify
            the day-to-day work of companies and businesses and to make projects
            that are close to our hearts available to the world in the AppStore.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger className="accordion-trigger">
            What does it mean that you develop native applications?
          </AccordionTrigger>
          <AccordionContent className="accordion-content">
            Unlike web-based solutions, we focus on developing native apps that
            run directly on Apple devices. This results in higher performance,
            better user experience, and the ability to fully leverage Apple
            hardware, ensuring our products function seamlessly.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger className="accordion-trigger">
            How can I contact you if I am interested in your software?
          </AccordionTrigger>
          <AccordionContent className="accordion-content">
            We can be reached via our website, by email, and on Instagram. We
            welcome every request and develop individual solutions. Our work
            process is divided into five steps: Analysis, Design, Development,
            Testing, and Deployment. During and after each step, we stay in
            close contact with you to ensure that everything runs according to
            your expectations.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger className="accordion-trigger">
            Who can benefit from using your apps?
          </AccordionTrigger>
          <AccordionContent className="accordion-content">
            Our apps are designed for both businesses and individuals who want
            to make their daily tasks more efficient. Companies and businesses,
            in particular, benefit from smoother workflows and a stronger local
            presence.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
