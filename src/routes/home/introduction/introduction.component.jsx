import React from "react";
import { Fragment } from "react";
import { introText, nameText } from "../categories";

import "./introduction.styles.scss";

const Introduction = () => {
  return (
    <Fragment>
      <div className="image-container">
        <img
          src="https://i.ibb.co/JpYzrjC/profile.png"
          alt="profile"
          border="0"
        />
      </div>
      <div className="text-container">
        <div className="name-text">
          <strong>{nameText}</strong>
        </div>
        <div className="text">{introText}</div>
      </div>
    </Fragment>
  );
};
export default Introduction;
