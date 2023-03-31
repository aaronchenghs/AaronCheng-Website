import React, { Fragment } from "react";
import { experience_svgs } from "./components/experience.svgs";
import "./experience.styles.scss";

export const Experience = () => {
  return (
    <Fragment>
      <div className="Experience-Container">
        <label className="Time">Currently...</label>

        <div className="College-Container">
          <div className="College-Jobs">
            <div className="Experience-Block">
              <div className="Image-Container">{experience_svgs.ARA.image}</div>
            </div>
            <div className="Experience-Block">
              <div className="Image-Container">
                {experience_svgs.Exodus.image}
              </div>
            </div>
          </div>
          <div className="Experience-Block-LSU">
            <div className="Image-Container">{experience_svgs.LSU.image}</div>
          </div>
        </div>

        <label className="Time">In the past...</label>
        <div className="College-Container">
          <div className="Experience-Block-HS">
            <div className="Image-Container">{experience_svgs.BRMHS.image}</div>
          </div>
          <div className="College-Jobs">
            <div className="Experience-Block">
              <div className="Image-Container">
                {experience_svgs.Sushi.image}
              </div>
            </div>
            <div className="Experience-Block">
              <div className="Image-Container">{experience_svgs.Tea.image}</div>
            </div>
            <div className="Experience-Block">
              <div className="Image-Container">
                {experience_svgs.Grocery.image}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Experience;
