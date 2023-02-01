import React from "react";
import { Fragment } from "react";
import ExternalLinks from "./components/externallinks/externallinks.component";
import { LightSwitch } from "../custom_mui/switches/lightswitch/lightSwitch.component";
import { useSelector, useDispatch } from "react-redux";
import { toggle } from "../redux_manager/actions/lightmode.action";
import "./bottombar.styles.scss";

const BottomBar = () => {
  const toggledLight = useSelector((state) => state.toggleLight);
  const dispatch = useDispatch();
  return (
    <Fragment>
      <div className="bottombar">
        <div className="switchContainer">
          <LightSwitch
            dark={toggledLight}
            onClick={() => {
              dispatch(toggle);
            }}
          />
        </div>
        <div className="extlinks-container">
          <ExternalLinks />
        </div>
      </div>
    </Fragment>
  );
};

export default BottomBar;
