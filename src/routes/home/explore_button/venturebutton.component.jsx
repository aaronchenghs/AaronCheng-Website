import React from "react";
import { Fragment } from "react";
import { useDispatch } from "react-redux";
import { vita } from "../../../redux_manager/actions/nav.action";

import "./venturebutton.styles.scss";
import { Link } from "react-router-dom";

const VentureButton = () => {
  const dispatch = useDispatch();
  return (
    <Fragment>
      <Link
        className="toVenturesButton"
        onClick={() => dispatch(vita)}
        to="/vita"
      >
        Explore
      </Link>
    </Fragment>
  );
};
export default VentureButton;
