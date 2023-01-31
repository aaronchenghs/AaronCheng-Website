import React, { Fragment } from "react";
import Stats from "./stats/stats.component";
import "./vita.styles.scss";

const Vita = () => {
  return (
    <Fragment>
      <div className="Vita-Page">
        <div className="Vita-Header-Container">
          <div className="Vita-Header">
            <div className="text">Vita_HeaderText</div>
          </div>
        </div>
        <div className="stats-container">
          <Stats />
        </div>
      </div>
    </Fragment>
  );
};
export default Vita;
