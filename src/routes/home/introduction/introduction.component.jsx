import React from "react";
import headshot from "../../../assets/headshot.jpg";
import { introText, nameText } from "../categories";

import "./introduction.styles.scss";

const IntroductionBlock = () => {
  return (
    <div className="intro-container">
      <div className="image-container">
        <img src={headshot} alt="profile" border="0" />
      </div>
      <div className="text-container">
        <div className="name-text">
          <strong>{nameText}</strong>
        </div>
        <div className="text">{introText}</div>
      </div>
    </div>
  );
};
export default IntroductionBlock;
