import React from "react";

import "../story.styles.scss";

export const GeoEntry = ({ img1, img2, text }) => {
  return (
    <div className="geo-line">
      <label style={{ marginRight: "10px" }}>
        {img1}
        {img2}
      </label>
      {text}
    </div>
  );
};
export default GeoEntry;
