import React from "react";
import "./feedbackentry.styles.scss";
const FeedbackEntry = ({ name, message }) => {
  return (
    <div className="feedback-entry">
      {name} + {message}
    </div>
  );
};
export default FeedbackEntry;
