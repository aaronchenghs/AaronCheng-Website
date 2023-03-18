import React, { Fragment, useEffect } from "react";
import VentureButton from "./explore_button/venturebutton.component.jsx";
import Introduction from "./introduction/introduction.component.jsx";
import { homeFade } from "../../redux_manager/actions/homeFade.action.js";
import { useDispatch, useSelector } from "react-redux";
import "./home.styles.scss";

const Home = () => {
  const dispatch = useDispatch();
  const homePageFadedIn = useSelector((state) => state.homeFadeReducer);

  useEffect(() => {
    setTimeout(() => {
      dispatch(homeFade);
    }, 1000);
  }, [dispatch]);

  return (
    <Fragment>
      <div className={`RealHome-Page ${homePageFadedIn ? "" : "fade-in"}`}>
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
