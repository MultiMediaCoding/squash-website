import { AppDetailTable } from "../../../Common/AppDetailTable/AppDetailTable";
import { InfoElement } from "../../../Common/InfoElement/InfoElement";
import { NavigationBar } from "../../../Navigation/NavigationBar";
import { AppDownloadElement } from "../AppDownloadElement/AppDownloadElement";
import { CommentSection } from "../CommentSection/CommentSection";
import { FeatureCards } from "../FeatureCards/view/FeatureCards";
import { AppHeader } from "../AppHeader/view/AppHeader";
import { MockupFeature } from "../MockupFeature/view/MockupFeature";
import { OtherProducts } from "../OtherProducts/OtherProducts";
import { PhotoCarousel } from "../PhotoCarousel/view/PhotoCarousel";
import { App } from "../../model/App";
import { Footer } from "../../../Home/Footer/Footer";
import { useEffect } from "react";

export function AppPreviewPage({ app }: { app: App }) {
  useEffect(() => {
    document.title = app.name;
  }, []);

  const displayPrice = app.price === 0 ? "Free" : `$${app.price}`;

  return (
    <div>
      <NavigationBar backgroundColor="#F0F0F0"></NavigationBar>
      <br></br>
      <br></br>
      <AppHeader
        name={app.name}
        slogan={app.shortDescription}
        icon={app.icon}
        isProduction={app.inProduction}
        deployments={app.deployments}
      ></AppHeader>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <InfoElement
        title={app.pageTitle}
        longTitle={""}
        description={app.pageSubtitle}
      ></InfoElement>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <PhotoCarousel app={app}></PhotoCarousel>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <FeatureCards app={app}></FeatureCards>
      {app.mockupFeatures.map((feature, index: number) => (
        <div>
          <MockupFeature
            mockupFeatureProps={{
              title: feature.title,
              subtitle: feature.subtitle,
              description: feature.description,
              image: feature.image,
              alignment: feature.alignment,
              softwareTarget: feature.softwareTarget,
            }}
          ></MockupFeature>

          {app.comments.length > 0 && index === 1 ? (
            <div>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <CommentSection
                comments={app.comments}
                speed={50000}
              ></CommentSection>
              <br></br>
              <br></br>
            </div>
          ) : null}
        </div>
      ))}
      <br></br>
      <br></br>
      <AppDownloadElement app={app}></AppDownloadElement>
      <br></br>
      <br></br>
      <AppDetailTable
        version={app.version}
        size={app.size}
        category={app.category}
        price={displayPrice}
      ></AppDetailTable>
      <br></br>
      <br></br>
      <OtherProducts app={app}></OtherProducts>
      <br></br>
      <br></br>
      <Footer></Footer>
    </div>
  );
}
