import React, { Fragment } from "react";
import { projects } from "./categories";
import "./portfolio.styles.scss";
import PageHeader from "../components/pageHeader/pageheader.component";

const Portfolio = () => {
  return (
    <Fragment>
      <div className="Portfolio-Page">
        <PageHeader text={"Take a Gander at My Projects 📦"} />
        <div className="cards-container">
          {projects.map((project) => {
            return (
              <div className="card-container" key={project.id}>
                <div className="project-image"></div>
                <div className="project-title">
                  <label>{project.title}</label>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Fragment>
  );
};
export default Portfolio;
