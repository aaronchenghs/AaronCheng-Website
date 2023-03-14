import React, { Fragment } from "react";
import { projects } from "./categories";
import Project from "./project-card/project.component";
import PageHeader from "../components/pageHeader/pageheader.component";

import "./portfolio.styles.scss";
const Portfolio = () => {
  return (
    <Fragment>
      <div className="Portfolio-Page">
        <PageHeader text={"My Projects 📦"} />
        <div className="cards-container">
          {projects.map((project) => {
            return <Project project={project} />;
          })}
        </div>
      </div>
    </Fragment>
  );
};
export default Portfolio;
