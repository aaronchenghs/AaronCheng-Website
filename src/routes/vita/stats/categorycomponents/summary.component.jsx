import React, { Fragment } from "react";
import { useSelector } from "react-redux";

import "./summary.styles.scss";

export const Summary = () => {
  const darkMode = useSelector((state) => state.toggleLight);

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
export default Summary;
