import React, { useState } from "react";

import "./stats.styles.scss";
import { homecategories } from "./plaintext.jsx";
import { statsCategories } from "./categories";

export const Stats = () => {
  const [CategorySelection, SetCategorySelection] = useState("summary");
  let categoryDisplay = (
    <div className="categoryDisplay">{homecategories[CategorySelection]}</div>
  );

  return (
    <div className="Home-Page">
      <div className="categories-container">
        {statsCategories.map((category) => {
          return (
            <button
              key={category.title}
              className={
                CategorySelection === category.state
                  ? "categoryButtonSelected"
                  : "categoryButton"
              }
              onClick={() => SetCategorySelection(category.state)}
            >
              <div className="category-text">{category.title}</div>
            </button>
          );
        })}
      </div>
      {/* <div className="portrait">
        <img alt="skins" />
      </div> */}
      <div className="bio">
        <div className="category-info">{categoryDisplay}</div>
      </div>
    </div>
  );
};
export default Stats;
