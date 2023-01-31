import React, { Fragment } from "react";
import PageHeader from "../components/pageHeader/pageheader.component";

import "./feedback.styles.scss";

const Feedback = () => {
  return (
    <Fragment>
      <div className="Feedback-Page">
        <PageHeader text={"Feedback Header"} />
      </div>
    </Fragment>
  );
};
export default Feedback;
