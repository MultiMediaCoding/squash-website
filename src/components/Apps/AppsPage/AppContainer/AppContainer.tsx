import "./AppContainer.css";

export function AppContainer({ appIcon }: { appIcon: string }) {
  return (
    <div className={"app"}>
      <div className={"iconContainer"}>
        <img className={"containerAppIcon"} src={appIcon}></img>
      </div>
      <div className="text-lg font-semibold">iSymbols</div>
      <small
        style={{ color: "#A0A0A0", lineHeight: "1.4" }}
        className="text-sm font-regular leading-none"
      >
        Connect your site to the most popular apps out there
      </small>
    </div>
  );
}
