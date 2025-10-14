import "./pageheader.styles.scss";

const PageHeader = ({ text }) => {
  return (
    <>
      <div className="Header-Container">
        <div className="Header">
          <div className="text">{text}</div>
        </div>
      </div>
    </>
  );
};
export default PageHeader;
