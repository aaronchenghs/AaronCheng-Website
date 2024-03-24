import React, { Fragment, useState } from "react";

import "./stats.styles.scss";
import Summary from "./categorycomponents/summary.component";
import Skills from "./categorycomponents/skills.component";
import Experience from "./categorycomponents/experience.component";
import Story from "./categorycomponents/story.component";

export const Stats = () => {
  //Button state
  const [CategorySelection, SetCategorySelection] = useState("summary");
  //Select category display
  const renderSelection = (selection) => {
    switch (selection) {
      case "summary":
        return <Summary />;
      case "skills":
        return <Skills />;
      case "experience":
        return <Experience />;
      case "story":
        return <Story />;
      default:
        return <div />;
    }
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
              onClick={() => SetCategorySelection(category.state)}
            >
              <label className="category-text">{category.title}</label>
            </button>
          );
        })}
      </div>
      {renderSelection(CategorySelection)}
    </Fragment>
  );
};
export default Stats;

const statsCategories = [
  {
    title: "Experience",
    state: "summary",
  },
  {
    title: "Ventures",
    state: "experience",
  },
  {
    title: "In Progress",
    state: "story",
  },
];
