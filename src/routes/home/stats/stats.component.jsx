import React, { useState } from "react";
import { Fragment } from "react";

import "./stats.styles.scss";
import { homecategories } from '../../../globals/plaintext.jsx';

export const Stats = () => {
  const [CategorySelection, SetCategorySelection] = useState("Education");
  let categoryDisplay = homecategories[CategorySelection];

  return (
    <Fragment>
      <div className="Home-Page">
        <div className="portrait">
          <img/>
        </div>
        <div className="bio">
          <div className="category-info">{categoryDisplay}</div>
          <div className="categories-container">

            <button className="categoryButton" onClick={()=>SetCategorySelection('Education')}>
              <div className="category-text">Summary</div>
            </button>
            <button className="categoryButton" onClick={()=>SetCategorySelection('ToolBox')}>
              <div className="category-text">Skills</div>
            </button>
            <button className="categoryButton" onClick={()=>SetCategorySelection('Experience')}>
              <div className="category-text">Experience</div>
            </button>
            <button className="categoryButton" onClick={()=>SetCategorySelection('Origins')}>
              <div className="category-text">Story</div>
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Stats;
