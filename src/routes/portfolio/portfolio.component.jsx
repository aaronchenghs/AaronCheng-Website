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
              <div className="card-container">
                <div className="card-body-container">
                  <img
                    className="card-image"
                    src={project.imagePath}
                    alt={project.title}
                  />
                  {project.id}
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
