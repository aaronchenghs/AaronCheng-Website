import "./ContactBox.styles.scss";

const ContactBox = ({ icon }) => {
  return (
    <div className="Contact-Container">
      <a
        className="contact-thumb"
        href={icon.link}
        target="_blank"
        rel="noreferrer"
      >
        <img className="contact-icon" src={icon.path} alt={`[icon]`} />
        <h2 className="icon-text">{icon.name}</h2>
      </a>
      <div className="contact-description-container">
        <body className="description">{icon.description}</body>
        <a className="tag" href={icon.link} target="_blank" rel="noreferrer">
          {icon.tag}
        </a>
      </div>
    </div>
  );
};
export default ContactBox;
