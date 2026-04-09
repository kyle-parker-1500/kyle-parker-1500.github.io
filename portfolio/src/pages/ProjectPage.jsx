import { Link, useParams } from "react-router-dom";
import { projects } from "../data/projects";

function ProjectPage() {
  const { projectId } = useParams();
  const project = projects.find((entry) => entry.id === projectId);

  if (!project) {
    return (
      <section>
        <h1>Project Not Found</h1>
        <p>Double-check the URL or go back to the portfolio homepage.</p>
        <p className="action-row">
          <Link className="action-button action-button-secondary" to="/">
            Back to Portfolio
          </Link>
        </p>
      </section>
    );
  }

  return (
    <section className="project-page">
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <h2>Tech Stack</h2>
      <ul>
        {project.technologies.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
      <div className="action-row">
        <a
          className="action-button"
          href={project.repoUrl}
          target="_blank"
          rel="noreferrer"
        >
          View on GitHub
        </a>
        <Link className="action-button action-button-secondary" to="/">
          Back to Portfolio
        </Link>
      </div>
    </section>
  );
}

export default ProjectPage;
