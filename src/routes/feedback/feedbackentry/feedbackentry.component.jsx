import React from "react";
import "./feedbackentry.styles.scss";

const FeedbackEntry = ({ name, message, date, first }) => {
  const entryClass = first ? "first-feedback-entry" : "feedback-entry";

  return (
    <div className={entryClass}>
      <label className="name-container">
        {name}
        <label className="date-container">on {date}</label>
      </label>
      <div className="message-container">{message}</div>
    </div>
  );
};
export default FeedbackEntry;
