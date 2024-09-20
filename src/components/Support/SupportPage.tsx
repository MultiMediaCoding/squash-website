import { BannerElement } from "../Common/BannerElement/BannerElement";
import { InfoElement } from "../Common/InfoElement/InfoElement";
import { FAQ } from "../Common/FAQ/FAQ";
import { Footer } from "../Home/Footer/Footer";
import { NavigationBar } from "../Navigation/NavigationBar";

export function SupportPage() {
  const title = "Support";
  const longTitle = "Helping You Get the Most from your products";
  const description =
    "Thank you for choosing our apps! If you need help or have questions, we’re here for you. Browse our FAQs, or contact us directly via email for personalized support. Your experience matters to us!";
  return (
    <div>
      <NavigationBar></NavigationBar>
      <br></br>
      <br></br>
      <InfoElement
        title={title}
        longTitle={longTitle}
        description={description}
        textAlign="left"
      ></InfoElement>
      <br></br>
      <br></br>
      <BannerElement
        title={"Refunds"}
        content={
          "If you’re not satisfied with your purchase, you can request a refund through reportaproblem.apple.com. However we’d love to hear from you! Please email us with any concerns or suggestions so we can work to improve your experience with our apps."
        }
        textAlign="left"
      ></BannerElement>
      <br></br>
      <br></br>
      <FAQ></FAQ>
      <br></br>
      <br></br>
      <Footer></Footer>
    </div>
  );
}
