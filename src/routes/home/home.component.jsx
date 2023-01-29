import React from "react";
import { Fragment } from "react";
import VentureButton from "./explore_button/venturebutton.component.jsx";
import Introduction from "./introduction/introduction.component.jsx";

import "./home.styles.scss";

const Home = () => {
  return (
    <Fragment>
      <div className="RealHome-Page">
        <div className="intro-container">
          <Introduction />
        </div>
        <div className="button-container">
          <VentureButton />
        </div>
      </div>
    </Fragment>
  );
};
export default Home;
