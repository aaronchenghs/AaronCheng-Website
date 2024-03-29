import React from "react";
import Stats from "./stats/stats.component";
import "./vita.styles.scss";
import PageHeader from "../components/pageHeader/pageheader.component";

const Vita = () => {
  return (
    <div className="Vita-Page">
      <PageHeader text={"Vita Aaron Cheng ✔"} />
      <div className="stats-container">
        <Stats />
      </div>
    </div>
  );
};
export default Vita;
