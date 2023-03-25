import React, { Fragment, useState } from "react";
import { prog_skills } from "./components/skills.svgs";

import "./skills.styles.scss";

const Skills = () => {
  const [selectedSkill, selectskill] = useState("");
  return (
    <Fragment>
      <div className="stack">
        {prog_skills.map((skill) => {
          return (
            <div
              className={
                `skill-instance` +
                `${skill.name === selectedSkill ? " selected-skill" : ""}`
              }
              style={{
                backgroundColor: skill.color,
              }}
              onClick={() => {
                selectskill(skill.name);
              }}
              key={skill.name}
            >
              <div className="title-container">
                <img
                  src={skill.src}
                  height={"60px"}
                  width={"60px"}
                  alt={skill.name}
                />
                <label>{skill.name}</label>
              </div>
            </div>
          );
        })}
      </div>
    </Fragment>
  );
};
export default Skills;
