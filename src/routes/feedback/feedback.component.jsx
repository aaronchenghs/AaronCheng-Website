import React, { Fragment, useEffect } from "react";
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
import { Skeleton } from "@mui/material";

//google logo
const GoogleLogo = (
  <img
    width="30"
    alt='Google "G" Logo'
    src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
  />
);

//scroll to top of page on nav
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const feedbackPerPage = 10;

const Feedback = () => {
  const dispatch = useDispatch();

  //pagination state
  const [paginationIndex, changePagination] = useState(0);

  //global state imports
  const signedIn = useSelector((state) => state.signIn);
  const messageGiven = useSelector((state) => state.toggleMessageGiven);
  const feedbackMap = useSelector((state) => state.feedbackLoadReducer);
  const darkMode = useSelector((state) => state.toggleLight);
  const isLoadingFeedbacks = useSelector((state) => state.isLoadingFeedbacks);

  //page navigation
  const incrementPagination = () => {
    if (paginationIndex + feedbackPerPage < feedbackMap.length) {
      changePagination(paginationIndex + feedbackPerPage);
      scrollToTop();
    }
  };
  const decrementPagination = () => {
    if (paginationIndex !== 0) {
      changePagination(paginationIndex - feedbackPerPage);
      scrollToTop();
    }
  };

  //login
  const logGoogleUser = async () => {
    try {
      const { user } = await signInWithGooglePopup();
      await createUserDocumentFromAuth(user);
      dispatch(signin_action);
    } catch (error) {
      console.log(error);
    }
  };

  //send user back to first page if feedback is given
  useEffect(() => {
    changePagination(0);
  }, [messageGiven]);

  const feedbackContainerStyle = signedIn
    ? "give-feedback-container"
    : "button-container";

  const navFeedbackBar = (
    <div className="Load-More-Button">
      <button
        className="Feeback-Arrow-Container"
        onClick={decrementPagination}
        disabled={paginationIndex === 0}
      >
        {"<"}
      </button>
      {paginationIndex / feedbackPerPage + 1}/
      {!isLoadingFeedbacks
        ? Math.ceil(feedbackMap.length / feedbackPerPage)
        : "..."}
      <button className="Feeback-Arrow-Container" onClick={incrementPagination}>
        {">"}
      </button>
    </div>
  );

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
        <div className="feedback-section-container">
          {navFeedbackBar}
          <div className="feedback-entries-container">
            {!isLoadingFeedbacks ? (
              Object.keys(feedbackMap)
                .sort((a, b) => feedbackMap[b].date[3] - feedbackMap[a].date[3])
                .map((position, index) => {
                  return (
                    index < paginationIndex + feedbackPerPage &&
                    index >= paginationIndex && (
                      <FeedbackEntry
                        key={position}
                        name={feedbackMap[position].name}
                        message={feedbackMap[position].message}
                        date={feedbackDTO.formatDate(
                          feedbackMap[position].date
                        )}
                        first={index === 0 && messageGiven ? true : false}
                      />
                    )
                  );
                })
            ) : (
              //If is still loading, show loading skeleton
              <Skeleton
                variant="rectangular"
                animation="wave"
                width={"100%"}
                height={"20vh"}
              />
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Feedback;
