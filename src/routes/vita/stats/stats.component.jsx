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
              onClick={() => SetCategorySelection(category.state)}
            >
              <label className="category-text">{category.title}</label>
            </button>
          );
        })}
      </div>
      <div className={"bio"}>{categoryDisplay}</div>
    </Fragment>
  );
};
export default Stats;
