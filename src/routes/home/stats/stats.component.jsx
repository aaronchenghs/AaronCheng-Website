import React, { useState } from "react";
import { Fragment } from "react";

import "./stats.styles.scss";
import { homecategories } from '../../../globals/plaintext.jsx';

export const Stats = () => {
  const [CategorySelection, SetCategorySelection] = useState("Education");
  const openEducation = () => SetCategorySelection("Education");
  const openToolbox = () => SetCategorySelection("ToolBox");
  const openExperience = () => SetCategorySelection("Experience");
  const openOrigins = () => SetCategorySelection("Origins");

  let categoryDisplay = homecategories[CategorySelection];

  return (
    <Fragment>
      <body className="Home-Page">
        <div className="portrait">
          SKINS
        </div>
        <div className="bio">
          <div className="category-info">{categoryDisplay}</div>
          <div className="categories-container">
            
            <button className="categoryButton" onClick={openEducation}>
              <text className="category-text">Summary</text>
            </button>
            <button className="categoryButton" onClick={openToolbox}>
              <text className="category-text">Skills</text>
            </button>
            <button className="categoryButton" onClick={openExperience}>
              <text className="category-text">Experience</text>
            </button>
            <button className="categoryButton" onClick={openOrigins}>
              <text className="category-text">Story</text>
            </button>
          </div>
        </div>
      </body>
    </Fragment>
  );
};
export default Stats;
