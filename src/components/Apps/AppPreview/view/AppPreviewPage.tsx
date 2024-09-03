import { AppDetailTable } from "../../../Common/AppDetailTable";
import { InfoElement } from "../../../Common/InfoElement";
import { NavigationBar } from "../../../Navigation/NavigationBar";
import { AppDownloadElement } from "../AppDownloadElement/AppDownloadElement";
import { CommentSection } from "../CommentSection/CommentSection";
import { FeatureCards } from "../FeatureCards/view/FeatureCards";
import { AppHeader } from "../AppHeader/view/AppHeader";
import { MockupFeature } from "../MockupFeature/view/MockupFeature";
import { OtherProducts } from "../OtherProducts/OtherProducts";
import { PhotoCarousel } from "../PhotoCarousel/view/PhotoCarousel";
import mockup from "/images/Mockup.png";
import { useLocation } from "react-router-dom";
import { App } from "../../model/App";

export function AppPreviewPage() {
  const location = useLocation();
  const { app } = (location.state as { app: App }) || {};

  return (
    <div>
      <NavigationBar backgroundColor="#F0F0F0"></NavigationBar>
      <br></br>
      <br></br>
      <AppHeader
        name={app.name}
        slogan={app.shortDescription}
        icon={app.icon}
      ></AppHeader>
      <br></br>
      <br></br>
      <InfoElement
        title={app.pageTitle}
        longTitle={app.pageDescription}
        description={app.pageSubtitle}
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

      <CommentSection comments={app.comments}></CommentSection>

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
