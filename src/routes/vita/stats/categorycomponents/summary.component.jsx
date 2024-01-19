import React, { Fragment } from "react";
import { useSelector } from "react-redux";

import "./summary.styles.scss";

export const Summary = () => {
  const darkMode = useSelector((state) => state.toggleLight);

  return (
    <Fragment>
      <div className="Summary-Container">
        Coming Soon...
        {/* <div className="Primer-Container">
          <p className="Left-Dialogue">{Left_Dialogue}</p>
          <div className="Skin-Selector">
            <div className="Skin-Navigator"></div>
          </div>
          <p className="Right-Dialogue">{Right_Dialogue}</p>
        </div>
        <div className="AFK-container">
          <div className="AFK_pictures_container"></div>
          <div className="AFK_dialogue">{AFK_Dialogue}</div>
        </div> */}
      </div>
    </Fragment>
  );
};
export default Summary;
