import React, { Fragment } from "react";
import BottomBar from '../bottombar.components.jsx';

import './feedback.styles.scss';

const Feedback = () => {
  return (
    <Fragment>
      <div className='Page-Header'>
        <text className='Header-Text'>Feedback</text>
      </div>
      <BottomBar></BottomBar>
    </Fragment>
  )
}
export default Feedback;