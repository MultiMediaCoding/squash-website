import { Comment } from "../AppPreview/CommentSection/Comment/Comment";
import { Feature } from "../AppPreview/FeatureCards/model/FeatureCard";
import { MockupFeatureProps } from "../AppPreview/MockupFeature/model/MockupFeatureProps";

export interface App {
  name: string;
  shortDescription: string;
  icon: string;
  pageTitle: string;
  pageSubtitle: string;
  pageDescription: string;
  previewImages: string[];
  features: Feature[];
  mockupFeatures: MockupFeatureProps[];
  comments: Comment[];
  link: string;
  version: number;
  size: string;
  category: string;
  price: number;
  otherProducts: App[];
}
