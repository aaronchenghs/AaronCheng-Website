import { useEffect, useMemo } from "react";
import "./credlybadge.styles.scss";

let scriptLoaded = false;
function ensureCredlyScript() {
  if (scriptLoaded) return;
  const s = document.createElement("script");
  s.src = "https://cdn.credly.com/assets/utilities/embed.js";
  s.async = true;
  document.body.appendChild(s);
  scriptLoaded = true;
}

function extractBadgeId(verifyUrl) {
  const m = /\/badges\/([0-9a-f-]{36})/i.exec(verifyUrl ?? "");
  return m ? m[1] : null;
}

export const CredlyBadge = ({ cert }) => {
  const badgeId = useMemo(
    () => cert.badgeId ?? extractBadgeId(cert.verifyUrl),
    [cert]
  );

  useEffect(() => {
    ensureCredlyScript();
    const render = () => window?.Credly?.render && window.Credly.render();
    render();
    const t = setTimeout(render, 200);
    return () => clearTimeout(t);
  }, []);

  if (!badgeId) {
    return (
      <div className="credly-wrapper">
        <a
          className="credly-fallback"
          href={cert.verifyUrl}
          target="_blank"
          rel="noreferrer"
          title={cert.name}
          aria-label={`Verify ${cert.name}`}
        >
          <img
            src={cert.badgeSrc}
            alt={`${cert.name} badge`}
            className="img-fluid"
          />
        </a>
      </div>
    );
  }

  return (
    <div className="credly-wrapper">
      <div
        className="credly-badge"
        data-iframe-width={"500px"}
        data-iframe-height={"500px"}
        data-share-badge-id={badgeId}
        data-share-badge-host="https://www.credly.com"
        title={cert.name}
        aria-label={`Verify ${cert.name}`}
      />
    </div>
  );
};
