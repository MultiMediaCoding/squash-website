import type { Metadata } from "next";
import "../../src/index.css";

export const metadata: Metadata = {
  title: "Squash",
  description:
    "Squash develops user-centered, intuitive software that combines sustainability, sport, and technology using native components for seamless performance across devices.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
