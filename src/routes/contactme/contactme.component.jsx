import React, { Fragment } from "react";
import BottomBar from '../bottombar.components.jsx';

const ContactMe = () => {
  return (
    <Fragment>
      <div className='Page-Header'>
        <text className='Header-Text'>Contact Me!</text>
      </div>
      <BottomBar></BottomBar>
    </Fragment>
  )
}
export default ContactMe;