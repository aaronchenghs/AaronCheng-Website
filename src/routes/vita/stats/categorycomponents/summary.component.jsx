import React, { Fragment } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { AFK_Dialogue, primerImages } from "./components/summary.svgs";
import {
  Left_Dialogue,
  Right_Dialogue,
  navArraySvgs,
} from "./components/summary.svgs";

import "./summary.styles.scss";

export const Summary = () => {
  const [currentSkinIndex, SetSkinIndex] = useState(0);

  const darkMode = useSelector((state) => state.toggleLight);

  const prevImage = () => {
    SetSkinIndex(
      (currentSkinIndex - 1 + primerImages.length) % primerImages.length
    );
  };
  const nextImage = () => {
    SetSkinIndex((currentSkinIndex + 1) % primerImages.length);
  };

  const images = primerImages.map((image, index) => (
    <img
      key={index}
      src={image.src}
      alt={image.alt}
      className={`
        ${index === currentSkinIndex ? "active" : ""}
        ${
          index === currentSkinIndex - 1 ||
          (currentSkinIndex === 0 && index === primerImages.length - 1)
            ? "previous"
            : ""
        }
        ${
          index === currentSkinIndex + 1 ||
          (currentSkinIndex === primerImages.length - 1 && index === 0)
            ? "next"
            : ""
        }
      `}
    />
  ));

  return (
    <Fragment>
      <div className="Summary-Container">
        <div className="Primer-Container">
          <p className="Left-Dialogue">{Left_Dialogue}</p>
          <div className="Skin-Selector">
            <div className="Skin-Navigator">
              <div className="Portrait">{images}</div>
            </div>
            <div className="Portrait-Container">
              <div className="Arrow-Container" onClick={prevImage}>
                {darkMode
                  ? navArraySvgs.left_arrow_dark
                  : navArraySvgs.left_arrow_light}
              </div>
              {primerImages[currentSkinIndex].imageName}
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
