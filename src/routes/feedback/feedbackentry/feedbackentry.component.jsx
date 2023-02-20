import React from "react";
import "./feedbackentry.styles.scss";
const FeedbackEntry = ({ name, message, date }) => {
  return (
    <div className="feedback-entry">
      <label className="name-container">{name}</label>
      <label className="date-container">on {date}</label>
      <div className="message-container">{message}</div>
    </div>
  );
};
export default FeedbackEntry;
