import React from "react";
import "./project.styles.scss";

const Project = ({ project }) => {
  return (
    <div className="card-container" key={project.id}>
      <div className="project-image">
        <div className="text-box">{project.description}</div>
        <img className="bgImage" src={project.imgPath} alt={project.alt} />
      </div>
      <a
        className="project-title"
        href={project.href}
        target="_blank"
        rel="noreferrer"
      >
        {project.title}
      </a>
    </div>
  );
};
export default Project;
