import React, { Fragment } from "react";
import Stats from "./stats/stats.component";
import './vita.styles.scss';

const Vita = () => {
  return (
    <Fragment>
      <div className="stats-container">
        <Stats />
      </div>
    </Fragment>

  )
}
export default Vita;