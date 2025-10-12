import "./credlybadge.styles.scss";

export const CredlyBadge = ({ cert }) => {
  return (
    <a
      className="cert-badge"
      href={cert.verifyUrl}
      target="_blank"
      rel="noreferrer"
      title={cert.name}
      aria-label={`Verify ${cert.name}`}
    >
      <img
        className="cert-badge__img"
        src={cert.badgeSrc}
        alt={`${cert.name} badge`}
        loading="lazy"
      />
    </a>
  );
};
