import React from "react";
import { skill_svgs } from "./svgs/skills.svgs";

import "./skills.styles.scss";

export const Skills = () => {
  return (
    <div className="skills-content-container">
      <div className="Skills-row">
        <img src={skill_svgs.Android.src} />
      </div>
    </div>
  );
};
export default Skills;
