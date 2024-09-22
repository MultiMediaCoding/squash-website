export function ContactUs() {
  return (
    <div className="grey-box">
      <div className="grey-box-content">
        <p
          style={{ fontSize: 22, marginBottom: "8px" }}
          className="text-lg font-medium"
        >
          Contact us
        </p>

        <p className="text-xl text-muted-foreground">
          Telefon:{" "}
          <a href="tel:+4983823793" className="gray-link">
            +49 (0) 8382 3793
          </a>
          <br />
          E-Mail:{" "}
          <a href="mailto:hlps.developers@gmail.com" className="gray-link">
            hlps.developers@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
}
