import React, { Fragment } from "react";
import { prog_skills } from "./components/skills.svgs";

import "./skills.styles.scss";

export const Skills = () => {
  return (
    <Fragment>
      <div className="stack">
        {prog_skills.map((skill) => {
          return (
            <div
              className="skillTitle"
              style={{
                backgroundColor: skill.color,
              }}
            >
              <img src={skill.src} height={"60px"} width={"60px"} />
              <label>{skill.name}</label>
            </div>
          );
        })}
      </div>
    </Fragment>
  );
};
export default Skills;
