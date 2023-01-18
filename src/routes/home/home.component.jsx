import React from "react";
import { Fragment } from "react";
import BottomBar from "../bottombar.components.jsx";
import Stats from "./stats/stats.component";
import VentureButton from "./explore_button/venturebutton.component.jsx";
import Introduction from "./introduction/introduction.component.jsx";

import "./home.styles.scss";

const Home = () => {
  return (
    <Fragment>
      <body className="RealHome-Page">
        
        <div className="intro-container">
          <Introduction></Introduction>
        </div>
        <div className="button-container">
          <VentureButton></VentureButton>
        </div>
        <div className="stats-container">
          <Stats></Stats>
        </div>
      </body>
      <BottomBar></BottomBar>
    </Fragment>
  );
};
export default Home;
