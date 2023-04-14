import React, { Fragment } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { AFK_Dialogue } from "./components/summary.svgs";
import {
  Left_Dialogue,
  Right_Dialogue,
  SkinsArray,
  navArraySvgs,
} from "./components/summary.svgs";

import "./summary.styles.scss";

export const Summary = () => {
  const [currentSkinIndex, SetSkinIndex] = useState(0);
  const darkMode = useSelector((state) => state.toggleLight);
  const prevImage = () => {
    SetSkinIndex(
      (currentSkinIndex - 1 + SkinsArray.length) % SkinsArray.length
    );
  };

  const nextImage = () => {
    SetSkinIndex((currentSkinIndex + 1) % SkinsArray.length);
  };
  return (
    <Fragment>
      <div className="Summary-Container">
        <div className="Primer-Container">
          <p className="Left-Dialogue">{Left_Dialogue}</p>
          <div className="Skin-Selector">
            <div className="Skin-Navigator">
              <div className="Portrait">CurrentImage</div>
            </div>
            <div className="Portrait-Container">
              <div className="Arrow-Container" onClick={prevImage}>
                {darkMode
                  ? navArraySvgs.left_arrow_dark
                  : navArraySvgs.left_arrow_light}
              </div>
              {SkinsArray[currentSkinIndex].name}
              <div className="Arrow-Container" onClick={nextImage}>
                {darkMode
                  ? navArraySvgs.right_arrow_dark
                  : navArraySvgs.right_arrow_light}
              </div>
            </div>
          </div>
          <p className="Right-Dialogue">{Right_Dialogue}</p>
        </div>
        <div className="AFK-container">
          <div className="AFK_pictures_container"></div>
          <div className="AFK_dialogue">{AFK_Dialogue}</div>
        </div>
      </div>
    </Fragment>
  );
};
export default Summary;
