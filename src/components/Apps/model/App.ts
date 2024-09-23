import { Comment } from "../AppPreview/CommentSection/Comment/Comment";
import { Feature } from "../AppPreview/FeatureCards/model/FeatureCard";
import { MockupFeatureProps } from "../AppPreview/MockupFeature/model/MockupFeatureProps";

export interface App {
  name: string;
  shortDescription: string;
  icon: string;
  inProduction: boolean;
  pageTitle: string;
  pageSubtitle: string;
  previewImages: string[];
  features: Feature[];
  mockupFeatures: MockupFeatureProps[];
  comments: Comment[];
  deployments: Deployment[];
  version: string;
  size: string;
  category: string;
  price: number;
  otherProducts: Product[];
}

export interface Deployment {
  link: string;
  target: DeploymentTarget;
}

export enum DeploymentTarget {
  android = "android",
  iOS = "iOS",
  iPadOS = "iPadOS",
  watchOS = "watchOS",
  tvOS = "tvOS",
  macOS = "macOS",
  visionOS = "visionOS",
  web = "web",
}

export interface Product {
  name: string;
  icon: string;
  shortDescription: string;
}
