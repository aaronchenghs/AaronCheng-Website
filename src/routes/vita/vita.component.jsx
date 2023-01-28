import React, { Fragment } from "react";
import Stats from "./stats/stats.component";
import './vita.styles.scss';

const Vita = () => {
  return (
    <Fragment>
      <div className='Page-Header'>
        <text className='Header-Text'>Vita</text>
      </div>
      <div className="stats-container">
        <Stats />
      </div>
    </Fragment>

  )
}
export default Vita;