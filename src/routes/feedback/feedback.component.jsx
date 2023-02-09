import React, { Fragment, useEffect } from "react";
import PageHeader from "../components/pageHeader/pageheader.component";
import FeedbackEntry from "./feedbackentry/feedbackentry.component";
import FeedbackInput from "./feedbackinput/feedbackinput.component";
import { useSelector, useDispatch } from "react-redux";
import { signin_action } from "../../redux_manager/actions/auth.action";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import { getFeedbackStream } from "../../utils/firebase/firebase.utils";
import { useState } from "react";

import "./feedback.styles.scss";

const Feedback = () => {
  const signedIn = useSelector((state) => state.signIn);
  const [feedbackMap, setFeedbackMap] = useState({});
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

  const messageGiven = useSelector((state) => state.toggleMessageGiven);

  useEffect(() => {
    const getFeedbackMap = async () => {
      const feedbackMap = await getFeedbackStream();
      setFeedbackMap(feedbackMap);
    };
    getFeedbackMap();
  }, [feedbackMap]);

  const feedbackContainerStyle = signedIn
    ? "give-feedback-container"
    : "button-container";
  return (
    <Fragment>
      <div className="Feedback-Page">
        <PageHeader text={"Love Me? Hate Me...? Post a Note 🖋"} />
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
              Thanks you for providing feedback!
            </label>
          )}
        </div>
        <div className="feedback-entries-container">
          {Object.keys(feedbackMap).map((position) => {
            return (
              <FeedbackEntry
                key={feedbackMap[position].name}
                name={feedbackMap[position].name}
                message={feedbackMap[position].message}
              />
            );
          })}
        </div>
      </div>
    </Fragment>
  );
};
export default Feedback;
