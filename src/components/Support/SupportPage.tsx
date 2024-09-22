import { InfoElement } from "../Common/InfoElement/InfoElement";
import { FAQ } from "../Common/FAQ/FAQ";
import { Footer } from "../Home/Footer/Footer";
import { NavigationBar } from "../Navigation/NavigationBar";
import { BannerElement } from "../Common/BannerElement/BannerElement";
import { ContactUs } from "./ContactUs";
import { Ban } from "lucide-react";

export function SupportPage() {
  const infoElemets = [
    {
      title: "Support",
      longTitle: "",
      description:
        "If you need help or have questions, we’re here for you. Browse our FAQs, or contact us directly via email for personalized support. Your experience matters to us!",
    },

    {
      title: "Features and Bugs",
      longTitle: "Helping You Get the Most from your products",
      description:
        "By sharing your thoughts with us, you play a vital role in our development process. Please contact us via email with any feature requests or bug reports.",
    },
    {
      title: "Refunds",
      longTitle: "",
      description:
        "If you’re not satisfied with your purchase, you can request  a refund through reportaproblem.apple.com. However we’d love to hear from you! Please email us with any concerns or suggestions so we can work to improve your experience with our apps.",
    },
  ];

  return (
    <div style={{ textAlign: "left" }}>
      <NavigationBar></NavigationBar>
      <br></br>
      {infoElemets.map((element) => (
        <div>
          <InfoElement
            title={element.title}
            longTitle={element.longTitle}
            description={element.description}
            textAlign="left"
          ></InfoElement>
          <br></br>
          <br></br>
        </div>
      ))}

      <br></br>
      <ContactUs></ContactUs>
      <br></br>
      <br></br>
      <FAQ></FAQ>
      <br></br>
      <br></br>
      <Footer></Footer>
    </div>
  );
}
