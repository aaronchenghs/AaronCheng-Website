import { Fragment } from "react";
import ExternalLinks from "./components/externallinks/externallinks.component";
import { LightSwitch } from "../custom_mui/switches/lightswitch/lightSwitch.component";
import { useSelector, useDispatch } from "react-redux";
import { scrollToTop } from "../utils/window";
import { toggle } from "../redux_manager/actions/lightmode.action";
import "./footer.styles.scss";

const Footer = () => {
  const toggledLight = useSelector((state) => state.toggleLight);
  const dispatch = useDispatch();

  return (
    <Fragment>
      <div className="footer">
        <div className="switchContainer">
          <LightSwitch
            dark={toggledLight.toString()}
            onClick={() => {
              dispatch(toggle);
            }}
          />
        </div>

        <div className="toTopContainer">
          <button
            type="button"
            className="toTopButton"
            onClick={() => scrollToTop()}
            aria-label="Back to top"
          >
            Return to Top
          </button>
        </div>

        <div className="extlinks-container">
          <ExternalLinks />
        </div>
      </div>
    </Fragment>
  );
};

export default Footer;
