import React, { Fragment } from "react";
import PageHeader from "../components/pageHeader/pageheader.component";
import { TextField } from "@mui/material";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import "./feedback.styles.scss";

const Feedback = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };
  return (
    <Fragment>
      <div className="Feedback-Page">
        <PageHeader text={"Feedback Header"} />
        <div className="give-feedback-container">
          <button onClick={logGoogleUser}>
            Sign in with google to leave feedback
          </button>
          {/* <TextField />
          other stuff */}
        </div>
        <div className="feedbacks-container"></div>
      </div>
    </Fragment>
  );
};
export default Feedback;
