import React from "react";
import { useSelector } from "react-redux";
import ArticleIcon from "@mui/icons-material/Article";

import "./summary.styles.scss";

export const Summary = () => {
  const darkMode = useSelector((state) => state.toggleLight);

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = `${process.env.PUBLIC_URL}/AaronCheng_Resume2024.pdf`;
    link.download = "AaronCheng_Resume2024.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="category-block">
      <p> More Coming Soon...</p>
      <button onClick={handleDownloadResume} className="categoryButtonSummary">
        <label>
          {" "}
          <ArticleIcon />
          Download Resume (.pdf)
        </label>
      </button>
    </div>
  );
};
export default Summary;
