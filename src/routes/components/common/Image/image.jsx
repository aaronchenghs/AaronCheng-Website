import React, { useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import "./image.styles.scss"; // Ensure you have the CSS file for styles

const Image = ({ src, alt, id, className }) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className={className}>
      {isLoading && (
        <div className="loading-overlay">
          <CircularProgress className="loading-wheel" />
        </div>
      )}
      <img
        className={className}
        src={src}
        alt={alt}
        id={id}
        onLoad={handleImageLoad}
        style={{ display: isLoading ? "none" : "block" }}
      />
    </div>
  );
};

export default Image;
