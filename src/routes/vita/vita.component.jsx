import React, { Fragment } from "react";
import Stats from "./stats/stats.component";
import "./vita.styles.scss";
import PageHeader from "../components/pageHeader/pageheader.component";

const Vita = () => {
  return (
    <Fragment>
      <div className="Vita-Page">
        <PageHeader text={"The Guide to Aaron Cheng ✔"} />
        <div className="stats-container">
          <Stats />
        </div>
      </div>
    </Fragment>
  );
};
export default Vita;
