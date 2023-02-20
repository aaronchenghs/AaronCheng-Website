import React, { Fragment } from "react";
import PageHeader from "../components/pageHeader/pageheader.component";
import FeedbackEntry from "./feedbackentry/feedbackentry.component";
import FeedbackInput from "./feedbackinput/feedbackinput.component";
import { useSelector, useDispatch } from "react-redux";
import { signin_action } from "../../redux_manager/actions/auth.action";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import "./feedback.styles.scss";

const Feedback = () => {
  const dispatch = useDispatch();

  const signedIn = useSelector((state) => state.signIn);
  const messageGiven = useSelector((state) => state.toggleMessageGiven);
  const feedbackMap = useSelector((state) => state.feedbackLoadReducer);

  const logGoogleUser = async () => {
    try {
      const { user } = await signInWithGooglePopup();
      await createUserDocumentFromAuth(user);
      dispatch(signin_action);
    } catch (error) {
      console.log(error);
    }
  };
  const feedbackContainerStyle = signedIn
    ? "give-feedback-container"
    : "button-container";
  return (
    <Fragment>
      <div className="Feedback-Page">
        <PageHeader text={"Love Me, Hate Me, Post a Note ✏️"} />
        <div className={feedbackContainerStyle}>
          {!messageGiven ? (
            signedIn ? (
              <FeedbackInput />
            ) : (
              <button className="sign-in-button" onClick={logGoogleUser}>
                Sign in with Google to leave feedback
              </button>
            )
          ) : (
            <label className="post-submit-message">
              Thank you for providing feedback!
            </label>
          )}
        </div>
        <div className="feedback-entries-container">
          {Object.keys(feedbackMap).map((position) => {
            return (
              <FeedbackEntry
                key={position}
                name={feedbackMap[position].name}
                message={feedbackMap[position].message}
                date={feedbackMap[position].date}
              />
            );
          })}
        </div>
      </div>
    </Fragment>
  );
};
export default Feedback;
