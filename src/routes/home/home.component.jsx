import React from "react";
import { Fragment } from "react";

import './home.styles.scss'

const Home = () =>
{
  return(
    <Fragment>
      <div className = 'Home-Page'>
        <img className = 'profile-picture' src = '/profile-picture.jpg' alt = "aaron cheng" width = '500' height= '600'/>
        <div className = 'infoCard'>infocard</div>
      </div>
    </Fragment>
  )
}
export default Home;