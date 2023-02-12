import React, { Fragment, useState } from "react";

import "./stats.styles.scss";
import { statsCategories } from "./categories";

export const Stats = () => {
  const [CategorySelection, SetCategorySelection] = useState("summary");
  let categoryDisplay = <div className="categoryDisplay">placeholder</div>;

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
      <div className="bio">{categoryDisplay}</div>
    </Fragment>
  );
};
export default Stats;
