import React from "react";
import { introText, nameText } from "../categories";

import "./introduction.styles.scss";

const Introduction = () => {
  return (
    <div className="intro-container">
      <div className="image-container">
        <img src="imagehere" alt="profile" border="0" />
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
export default Introduction;
