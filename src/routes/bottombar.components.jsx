import React from "react";
import { Fragment } from "react";
import ExternalLinks from "./components/externallinks/externallinks.component";
import "./bottombar.styles.scss";

const BottomBar = () => {
  return (
    <Fragment>
      <div className="bottombar">
        <div className="extlinks-container">
          <ExternalLinks />
        </div>
      </div>
    </Fragment>
  );
};

export default BottomBar;
