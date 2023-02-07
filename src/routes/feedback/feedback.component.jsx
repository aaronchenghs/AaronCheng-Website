import React, { Fragment } from "react";
import PageHeader from "../components/pageHeader/pageheader.component";
import FeedbackEntry from "./feedbackentry/feedbackentry.component";
import FeedbackInput from "./feedbackinput/feedbackinput.component";
import { useSelector, useDispatch } from "react-redux";
import { signin_action } from "../../redux_manager/actions/auth.action";
import { getAllFeedback } from "../../utils/firebase/firebase.utils";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import "./feedback.styles.scss";

const Feedback = () => {
  const signedIn = useSelector((state) => state.signIn);
  const dispatch = useDispatch();

  const logGoogleUser = async () => {
    try {
      const { user } = await signInWithGooglePopup();
      const userDocRef = await createUserDocumentFromAuth(user);
      dispatch(signin_action);
    } catch (error) {
      console.log("Sign in cancelled");
    }
  };

  return (
    <Fragment>
      <div className="Feedback-Page">
        <PageHeader text={"Love Me? Hate Me...? Post a Note 🖋"} />
        <div className="give-feedback-container">
          {signedIn ? (
            <FeedbackInput />
          ) : (
            <button className="sign-in-button" onClick={logGoogleUser}>
              Sign in with Google to leave feedback
            </button>
          )}
        </div>
        <div className="feedback-entries-container">
          <FeedbackEntry />
          <FeedbackEntry />
          <FeedbackEntry />
        </div>
        <div className="feedbacks-container"></div>
      </div>
    </Fragment>
  );
};
export default Feedback;
