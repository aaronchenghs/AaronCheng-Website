import { Fragment } from "react";
import { projects } from "./categories";
import Project from "./project-card/project.component";
import { certs } from "./certs";
import PageHeader from "../components/pageHeader/pageheader.component";
import { CredlyBadge } from "./cert-image/credlybadge.component";
import "./portfolio.styles.scss";

const Portfolio = () => {
  return (
    <Fragment>
      <div className="Portfolio-Page container py-4">
        <PageHeader text={"My Certifications ✅"} />
        <div className="certs-container">
          {certs.map((cert) => (
            <CredlyBadge key={cert.id} cert={cert} />
          ))}
        </div>
        <PageHeader text={"My Projects 📦"} />
        <div className="cards-container">
          {projects.map((project) => (
            <Project project={project} key={project.alt} />
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default Portfolio;
