import React, { Fragment } from "react";
import PageHeader from "../components/pageHeader/pageheader.component";
import { TextField } from "@mui/material";

import "./feedback.styles.scss";

const Feedback = () => {
  return (
    <Fragment>
      <div className="Feedback-Page">
        <PageHeader text={"Feedback Header"} />
        <div className="give-feedback-container">
          <TextField />
          other stuff
        </div>
        <div className="feedbacks-container"></div>
      </div>
    </Fragment>
  );
};
export default Feedback;
