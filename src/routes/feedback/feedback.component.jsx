import React, { Fragment } from "react";
import { useState } from "react";
import PageHeader from "../components/pageHeader/pageheader.component";
import FeedbackEntry from "./feedbackentry/feedbackentry.component";
import FeedbackInput from "./feedbackinput/feedbackinput.component";
import { useSelector, useDispatch } from "react-redux";
import { signin_action } from "../../redux_manager/actions/auth.action";
import { feedbackDTO } from "../../utils/firebase/firebase.utils";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import "./feedback.styles.scss";
const GoogleLogo = (
  <img
    width="30"
    alt='Google "G" Logo'
    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
  />
);
const Feedback = () => {
  const dispatch = useDispatch();

  const [paginationIndex, changePagination] = useState(0);

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
        <PageHeader text={"Leave Me a Note ✏️"} />
        <div className={feedbackContainerStyle}>
          {!messageGiven ? (
            signedIn ? (
              <FeedbackInput />
            ) : (
              <button className="sign-in-button" onClick={logGoogleUser}>
                {GoogleLogo}
                Sign in with Google to leave feedback
              </button>
            )
          ) : (
            <label className="post-submit-message">
              ✅Thank you for providing feedback✅
            </label>
          )}
        </div>
        <div className="Load-More-Container">
          <div className="Load-More-Button">Load More Feedback</div>
        </div>
        <div className="feedback-entries-container">
          {Object.keys(feedbackMap)
            .sort((a, b) => feedbackMap[b].date[3] - feedbackMap[a].date[3])
            .map((position, index) => {
              return (
                index <= paginationIndex + 14 &&
                index >= paginationIndex && (
                  <FeedbackEntry
                    key={position}
                    name={feedbackMap[position].name}
                    message={feedbackMap[position].message}
                    date={feedbackDTO.formatDate(feedbackMap[position].date)}
                    first={index === 0 && messageGiven ? true : false}
                  />
                )
              );
            })}
          <div className="Load-More-Container">
            <div className="Load-More-Button">Load More Feedback</div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Feedback;
