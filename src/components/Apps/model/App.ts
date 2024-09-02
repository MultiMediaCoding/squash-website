import { Feature } from "../AppPreview/FeatureCards/model/FeatureCard";

export interface App {
  name: string;
  shortDescription: string;
  icon: string;
  pageTitle: string;
  pageSubtitle: string;
  pageDescription: string;
  previewImages: string[];
  features: Feature[];
  version: string;
  size: string;
  category: string;
  price: number;
  link: string;
}
