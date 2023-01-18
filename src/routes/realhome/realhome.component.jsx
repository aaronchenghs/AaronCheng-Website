import React from "react";
import { Fragment } from "react";
import BottomBar from "../bottombar.components.jsx";
import Home from "../components/stats/home.component.jsx";

import "./realhome.styles.scss";

const RealHome = () => {
  return (
    <Fragment>
      <div className = 'intro-container'>

      </div>
      <body className="RealHome-Page">
        <div className="button-container">
          <button className="toVenturesButton">Explore</button>
        </div>
        <div className="stats-container">
          <Home></Home>
        </div>
        <div></div>
      </body>
      <BottomBar></BottomBar>
    </Fragment>
  );
};
export default RealHome;
