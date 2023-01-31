import React, { Fragment } from "react";
import { projects } from "./categories";
import "./portfolio.styles.scss";

const Portfolio = () => {
  return (
    <Fragment>
      <div className="Portfolio-Page">
        <div className="Portfolio-Header-Container">
          <div className="Portfolio-Header">
            <div className="text">Portfolio_HeaderText</div>
          </div>
        </div>
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
