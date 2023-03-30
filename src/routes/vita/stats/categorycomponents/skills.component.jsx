import React, { Fragment, useState } from "react";
import { prog_skills } from "./components/skills.svgs";

import "./skills.styles.scss";

function createIconsImages(skill) {
  let iconHeight = "100%";
  let iconWidth = "58px";
  return (
    <Fragment>
      <img
        src={skill.src}
        height={iconHeight}
        width={iconWidth}
        alt={skill.name}
      />
      {skill.extra && (
        <img
          src={skill.extra.src}
          height={iconHeight}
          width={iconWidth}
          alt={skill.extra.name}
        />
      )}
    </Fragment>
  );
}

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
                skill.name === selectedSkill
                  ? selectskill("")
                  : selectskill(skill.name);
              }}
              key={skill.name}
            >
              <div className="title-container">
                {createIconsImages(skill)}
                <label style={{ paddingLeft: "10px" }}>{skill.name}</label>
              </div>
              {skill.name === selectedSkill && (
                <div className="skill-content">
                  <div className="skill-description">{skill.description}</div>
                  {skill.related && (
                    <div className="skill-related">
                      <strong>Related:</strong> {skill.related}
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </Fragment>
  );
};
export default Skills;
