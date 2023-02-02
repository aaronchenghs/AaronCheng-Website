import React, { Fragment } from "react";
import { projects } from "./categories";
import "./portfolio.styles.scss";
import PageHeader from "../components/pageHeader/pageheader.component";

const Portfolio = () => {
  return (
    <Fragment>
      <div className="Portfolio-Page">
        <PageHeader text={"Portfolio Header"} />
        <div className="cards-container">
          {projects.map((project) => {
            return (
              <div className="card-container" key={project.id}>
                <div className="card-body-container">
                  <img
                    className="card-image"
                    src={project.imagePath}
                    alt={project.title}
                  />
                  <h2 className="card-title">{project.title}</h2>
                  <p className="card-description">{project.description}</p>
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
