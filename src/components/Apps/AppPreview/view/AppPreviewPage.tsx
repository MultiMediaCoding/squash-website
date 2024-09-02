import { AppDetailTable } from "../../../Common/AppDetailTable";
import { InfoElement } from "../../../Common/InfoElement";
import { NavigationBar } from "../../../Navigation/NavigationBar";
import { AppDownloadElement } from "../AppDownloadElement/AppDownloadElement";
import { CommentSection } from "../CommentSection/CommentSection";
import { FeatureCards } from "../FeatureCards/view/FeatureCards";
import { AppHeader } from "../MockupInterface/AppHeader/view/AppHeader";
import { MockupFeature } from "../MockupInterface/view/MockupFeature";
import { OtherProducts } from "../OtherProducts/OtherProducts";
import { PhotoCarousel } from "../PhotoCarousel/view/PhotoCarousel";
import isymbols from "/images/iSymbols.png";
import mockup from "/images/Mockup.png";

export function AppPreviewPage() {
  const comments = [
    {
      title: "Fantastic Tool!",
      description:
        "This app has every icon I need for my projects. A must-have for designers!",
      rating: 5,
    },
    {
      title: "Very useful",
      description:
        "A great collection of SF Symbols, perfect for my app development needs.",
      rating: 4,
    },
    {
      title: "Love the simplicity!",
      description:
        "The app is straightforward and easy to navigate. Found all the symbols I was looking for in seconds.",
      rating: 5,
    },
    {
      title: "Could be better",
      description:
        "The icons are great, but I wish there were more customization options.",
      rating: 3,
    },
    {
      title: "Great for quick access",
      description:
        "Perfect app for quickly finding the right symbol. Saves me so much time!",
      rating: 4,
    },
  ];
  return (
    <div>
      <NavigationBar backgroundColor="#F0F0F0"></NavigationBar>
      <br></br>
      <br></br>
      <AppHeader
        name="iSymbols"
        slogan="Icons - easier than ever"
        icon={isymbols}
      ></AppHeader>
      <br></br>
      <br></br>
      <InfoElement
        title="Icons Redefined"
        longTitle="Everything that makes iSymbols so unique"
        description="Keeps your Mac desktop tidy and hides all folders and documents wit just a Mousecklick."
      ></InfoElement>
      <br></br>
      <br></br>
      <PhotoCarousel></PhotoCarousel>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <FeatureCards></FeatureCards>

      <MockupFeature
        mockupFeatureProps={{
          title: "4.000 Symbols",
          subtitle: "Brose the Apple SF Symbol Database",
          description:
            "Quickly find every icon you can imagine in the SF Symbol groups and browse thousands of different glyphs.",
          image: mockup,
          alignment: "left",
        }}
      ></MockupFeature>
      <br></br>
      <br></br>

      <CommentSection comments={comments}></CommentSection>

      <MockupFeature
        mockupFeatureProps={{
          title: "Customize",
          subtitle: "Style your icons the way you like",
          description:
            "Adjust your symbol’s size, color, radius, or even add a shadow to fit your needs. When you’re ready to use it, simply export it with one tap and save it to your phones camera roll as an image.",
          image: mockup,
          alignment: "right",
        }}
      ></MockupFeature>
      <br></br>
      <br></br>
      <AppDownloadElement></AppDownloadElement>
      <br></br>
      <br></br>
      <AppDetailTable
        version="3.0"
        size="2GB"
        category="Utility"
        price="$0.99"
      ></AppDetailTable>
      <br></br>
      <br></br>
      <OtherProducts></OtherProducts>
    </div>
  );
}
