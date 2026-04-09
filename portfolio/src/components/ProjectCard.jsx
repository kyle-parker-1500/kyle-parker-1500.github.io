import { Link } from "react-router-dom";

function ProjectCard({ project }) {
  return (
    <article className="card">
      <h3>{project.title}</h3>
      <p>{project.summary}</p>
      <div className="action-row">
        <Link className="action-button" to={`/projects/${project.id}`}>
          View Project
        </Link>
      {" • "}
        <a
          className="action-button action-button-secondary"
          href={project.repoUrl}
          target="_blank"
          rel="noreferrer"
        >
        GitHub
        </a>
      </div>
    </article>
  );
}

export default ProjectCard;
