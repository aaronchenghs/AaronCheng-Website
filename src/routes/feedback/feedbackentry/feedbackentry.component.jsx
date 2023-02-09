import React from "react";
import "./feedbackentry.styles.scss";
const FeedbackEntry = ({ name, message }) => {
  return (
    <div className="feedback-entry">
      <label className="name-container">{name}</label>
      <div className="message-container">{message}</div>
    </div>
  );
};
export default FeedbackEntry;
