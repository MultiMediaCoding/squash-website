import "./Footer.css";

export function Footer() {
  const appleDesignResourcesLegal =
    "iPhone, Mac and the Apple logo are registered trademarks of Apple Inc. registered in the U.S. and other countries. The Apple Download Badge and the Apple products (iPhone/Mac) depicted are used with permission in accordance with the Apple Design Guidelines. This website is independent from Apple Inc. and is not endorsed or sponsored by Apple.";
  return (
    <div className="footer">
      <div className="footer-content">
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Legal
        </h3>
        <a
          href="/impressum"
          target="_blank"
          className="text-xl text-muted-foreground gray-link"
        >
          Impressum
        </a>
        <a
          href="/datenschutz"
          target="_blank"
          className="text-xl text-muted-foreground gray-link"
        >
          Datenschutz
        </a>
      </div>

      <hr className={"divider"} />

      <p className="text-sm text-muted-foreground footer-content" style={{ paddingRight: 30 }}>
        {appleDesignResourcesLegal}
      </p>
    </div>
  );
}
