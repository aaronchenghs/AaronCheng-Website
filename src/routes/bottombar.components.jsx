import React, { useState } from "react";
import { Fragment } from "react";
import ExternalLinks from "./components/externallinks/externallinks.component";
import { LightSwitch } from "../custom_mui/switches/lightswitch/lightSwitch.component";
import "./bottombar.styles.scss";

const BottomBar = () => {
  const [dark, toggleDark] = useState(false);

  return (
    <Fragment>
      <div className="bottombar">
        <div className="switchContainer">
          <LightSwitch dark={dark} onClick={() => toggleDark(!dark)} />
        </div>
        <div className="extlinks-container">
          <ExternalLinks />
        </div>
      </div>
    </Fragment>
  );
};

export default BottomBar;
