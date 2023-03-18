import React, { Fragment, useState } from "react";

import "./stats.styles.scss";
import { statsCategories } from "./categories";

export const Stats = () => {
  //Button state
  const [CategorySelection, SetCategorySelection] = useState("summary");
  //Select category display
  const categoryDisplay = statsCategories.find(
    (category) => category.state === CategorySelection
  ).component;

  // CSS classes for the bio container
  const [bioClasses, setBioClasses] = useState("bio");

  // Update the bio classes when CategorySelection changes
  const handleCategoryChange = (categoryState) => {
    // Set the new CategorySelection state
    SetCategorySelection(categoryState);

    // Add the 'squeeze' class to the bio container
    setBioClasses("bio squeeze");

    // Wait 500ms and then remove the 'squeeze' class to trigger the animation
    setTimeout(() => {
      setBioClasses("bio");
    }, 500);
  };

  return (
    <Fragment>
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
              onClick={() => handleCategoryChange(category.state)}
            >
              <label className="category-text">{category.title}</label>
            </button>
          );
        })}
      </div>
      <div className={bioClasses}>{categoryDisplay}</div>
    </Fragment>
  );
};
export default Stats;
