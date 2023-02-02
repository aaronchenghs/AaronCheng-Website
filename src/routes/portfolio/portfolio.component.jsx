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
                <div className="card-image-container">
                  <img
                    className="card-image"
                    src={project.imgPath}
                    alt={project.title}
                  />
                </div>
                <div className="card-title-container">
                  <h2 className="card-title">{project.title}</h2>
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
