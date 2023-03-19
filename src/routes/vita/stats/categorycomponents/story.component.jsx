import React, { Fragment } from "react";
import { story_svgs, story_text } from "./svgs/story.svgs";

import "./story.styles.scss";

export const Story = () => {
  return (
    <Fragment>
      <div className="story-logLine">{story_text.log}</div>
      <div className="timeline-container">
        <div className="timeline-line" />
        <div className="geographic-origin-text-container">
          <div className="parents">
            <label style={{ "margin-right": "0.7vw" }}>
              {story_svgs.US_flag}
              {story_svgs.BR_flag}
            </label>
            {story_text.parents}
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Story;
