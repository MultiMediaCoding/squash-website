import "./Footer.css";

export function Footer() {
  const appleDesignResourcesLegal =
    "Apple, the Apple logo, macOS, Mac, iPhone, and iPad are trademarks of Apple&nbsp;Inc., registered in the U.S. and other countries and regions. App&nbsp;Store is a service mark of Apple&nbsp;Inc. IOS is a trademark or registered trademark of Cisco in the U.S. and other countries and is used under license.";
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

      <p className="text-sm text-muted-foreground footer-content">
        {appleDesignResourcesLegal}
      </p>
    </div>
  );
}
