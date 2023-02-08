import React from "react";
import "./feedbackentry.styles.scss";
const FeedbackEntry = ({ name, message }) => {
  return (
    <div className="feedback-entry">
      <label className="name-container">{name}</label>
      <p className="message-container">{message}</p>
    </div>
  );
};
export default FeedbackEntry;
