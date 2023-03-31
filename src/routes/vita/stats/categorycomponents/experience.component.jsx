import React, { Fragment } from "react";
import { experience_svgs } from "./components/experience.svgs";
import "./experience.styles.scss";

export const Experience = () => {
  return (
    <Fragment>
      <div className="Experience-Container">
        <div className="Experience-Block">{experience_svgs.ARA.image}</div>
      </div>
    </Fragment>
  );
};
export default Experience;
