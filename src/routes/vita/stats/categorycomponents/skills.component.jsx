import React, { Fragment } from "react";
import { prog_skills } from "./components/skills.svgs";

import "./skills.styles.scss";

export const Skills = () => {
  return (
    <Fragment>
      <div className="stack">
        {prog_skills.map((skill) => {
          return (
            <div className="skillTitle">
              <img src={skill.src} height={"60px"} width={"60px"} />
              <label>{skill.name}</label>
            </div>
          );
        })}
      </div>
      <div className="stack"></div>
    </Fragment>
  );
};
export default Skills;
