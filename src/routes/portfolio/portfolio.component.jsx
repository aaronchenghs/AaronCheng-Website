import React, { Fragment } from "react";
import BottomBar from '../bottombar.components.jsx';

import './portfolio.styles.scss';

const Portfolio = () => {
  return (
    <Fragment>
      <div className='Page-Header'>
        <text className='Header-Text'>Portfolio</text>
      </div>
      <BottomBar></BottomBar>
    </Fragment>

  )
}
export default Portfolio;