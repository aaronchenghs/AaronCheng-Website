import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import IntroductionBlock from "./introduction/introduction.component.jsx";
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
      <div className={`RealHome-Page ${homePageFadedIn ? "" : "home-fade-in"}`}>
        <IntroductionBlock />

        <div className="button-container">
          <Link className="toVenturesButton" to="/vita">
            Explore
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
