import React from "react";
import Image from "../../components/common/Image/image.jsx";
import "./project.styles.scss";

const Project = ({ project }) => {
  return (
    <div className="card-container" key={project.id}>
      <div className="project-image">
        <div className="text-box">
          <div className="desc">{project.description}</div>

          <div className="techs">
            {" "}
            <strong>Utilities:</strong>
            {project.icons.map((icon, id) => {
              return (
                <Image
                  className="tech-icon"
                  src={icon}
                  alt={"tech logo"}
                  key={id}
                />
              );
            })}
          </div>
        </div>
        <Image
          className="bgImage"
          src={project.imgPath}
          alt={project.alt}
          id={project.id}
        />
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
