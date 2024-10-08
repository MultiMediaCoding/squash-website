import { CSSProperties } from "react";

export interface MockupFeatureProps {
  image: string;
  title: string;
  subtitle: string;
  description: string;
  alignment: CSSProperties["textAlign"];
  softwareTarget: SoftwareTarget;
}

export enum SoftwareTarget {
  iOS = "iOS",
  macOS = "macOS",
}
