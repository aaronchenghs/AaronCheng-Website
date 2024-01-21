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
    <div className="category-block">
      Coming Soon...
      {/* <div className="story-logLine">{story_text.log}</div>
    <div className="timeline-container">
      <div className="timeline-line" />
      <div className="geographic-origin-text-container">
        <GeoEntry
          img1={story_svgs.US_flag}
          img2={story_svgs.BR_flag}
          text={story_text.parents}
        />
        <GeoEntry
          img1={story_svgs.IA_flag}
          img2={story_svgs.corn}
          text={story_text.born}
        />
        <GeoEntry
          img1={story_svgs.HI_flag}
          img2={story_svgs.FL_flag}
          text={story_text.moved}
        />
        <GeoEntry
          img1={story_svgs.LA_flag}
          img2={story_svgs.crawfish}
          text={story_text.louisiana}
        />
        <GeoEntry
          img1={story_svgs.CS}
          img2={story_svgs.LSU}
          text={story_text.college}
        />
      </div>
    </div> */}
    </div>
  );
};
export default Skills;
