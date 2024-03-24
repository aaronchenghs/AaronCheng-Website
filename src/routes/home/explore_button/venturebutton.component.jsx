import React from "react";
import { Fragment } from "react";
import { useDispatch } from "react-redux";

import "./venturebutton.styles.scss";
import { Link } from "react-router-dom";

const VentureButton = () => {
  const dispatch = useDispatch();
  return (
    <Fragment>
      <Link className="toVenturesButton" to="/vita">
        Explore
      </Link>
    </Fragment>
  );
};
export default VentureButton;
