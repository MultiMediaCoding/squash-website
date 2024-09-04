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
      <PhotoCarousel app={app}></PhotoCarousel>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <FeatureCards app={app}></FeatureCards>

      {app.mockupFeatures.map((feature, _) => (
        <MockupFeature
          mockupFeatureProps={{
            title: feature.title,
            subtitle: feature.subtitle,
            description: feature.description,
            image: feature.image,
            alignment: feature.alignment,
          }}
        ></MockupFeature>
      ))}

      <br></br>
      <br></br>

      <CommentSection comments={app.comments}></CommentSection>
      <br></br>
      <br></br>
      <AppDownloadElement app={app}></AppDownloadElement>
      <br></br>
      <br></br>
      <AppDetailTable
        version={app.version.toString()}
        size={app.size}
        category={app.category}
        price={`$${app.price}`}
      ></AppDetailTable>
      <br></br>
      <br></br>
      <OtherProducts app={app}></OtherProducts>
    </div>
  );
}
