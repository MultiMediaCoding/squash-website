import React from "react";
import "./Credtis.css";
import { NavigationBar } from "../../Navigation/NavigationBar";
import { Footer } from "../../Home/Footer/Footer";

export const Credits: React.FC = () => {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <br></br>
      <br></br>
      <div className="impressumText">
        <h1 className="text-4xl font-bold">Credits</h1>

        {/* Lindenhofpark App Figma Mockups */}
        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
          Lindenhofpark App Mockups
        </h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          App preview images displaying white phone mockups for the
          Lindenhofpark App are designed using the Free App Store Screenshot
          Templates by UXProSolutions, a Figma Community project. This template
          is licensed under
          <a
            href="https://creativecommons.org/licenses/by/4.0/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginLeft: 5 }}
            className="gray-link"
          >
            CC BY 4.0
          </a>
          .<br></br>
          <br></br>
          Please note that we have modified the original template by adding a
          gray stroke to the phone mockups for better visibility. This is the
          Figma project in use:
          <a
            href="https://www.figma.com/community/file/1256854154932829222"
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginLeft: 5 }}
            className="gray-link"
          >
            Free App Store Screenshot Templates
          </a>
          .<br></br>
          Licensed under
          <a
            href="https://creativecommons.org/licenses/by/4.0/"
            target="_blank"
            style={{ marginLeft: 5 }}
            rel="noopener noreferrer"
            className="gray-link"
          >
            Creative Commons Attribution 4.0 International (CC BY 4.0)
          </a>
          .<br></br>
          <br></br>
          Please review the template’s license for further details on permitted
          usage and attributions.
        </p>

        <p className="text-sm text-muted-foreground">
          Source:{" "}
          <a
            href="https://creativecommons.org/licenses/by/4.0/"
            target="_blank"
            rel="noopener noreferrer"
            className="gray-link"
          >
            https://creativecommons.org/licenses/by/4.0/
          </a>
        </p>

        {/* Apple Trademark Information */}
        <h2
          className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0"
          style={{ marginTop: 50 }}
        >
          Apple Trademark Information
        </h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          iPhone, Mac, and the Apple logo are registered trademarks of Apple
          Inc., registered in the U.S. and other countries. The Apple Download
          Badge and the Apple products (iPhone/Mac) depicted are used with
          permission in accordance with the
          <a
            href="https://developer.apple.com/app-store/marketing/guidelines/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginLeft: 5 }}
            className="gray-link"
          >
            Apple Marketing Resources and Identity Guidelines
          </a>
          .
          <br />
          <br />
          This website is independent from Apple Inc. and is not endorsed or
          sponsored by Apple.
        </p>

        {/* Google Play Trademark Information */}
        <h2
          className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0"
          style={{ marginTop: 50 }}
        >
          Google Play Trademark Information
        </h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Google Play and the Google Play logo are trademarks of Google LLC. The
          Google Play badge is used in accordance with the
          <a
            href="https://play.google.com/intl/en_us/badges/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginLeft: 5 }}
            className="gray-link"
          >
            Google Play Badge Usage Guidelines
          </a>
          .
          <br />
          <br />
          The Google Play badge used on this website was sourced from
          <a
            href="https://commons.wikimedia.org/wiki/File:Google_Play_Store_badge_EN.svg"
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginLeft: 5 }}
            className="gray-link"
          >
            Google Play, Public domain, via Wikimedia Commons
          </a>
          .
          <br />
          <br />
          This website is independent from Google LLC and is not endorsed or
          sponsored by Google.
        </p>
      </div>
      <br />
      <br />
      <Footer />
    </div>
  );
};
