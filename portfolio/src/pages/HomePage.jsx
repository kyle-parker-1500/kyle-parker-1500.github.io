import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";
import { Link } from "react-router-dom";

function HomePage() {
  const featuredProject = projects[0];
  const portfolioProjects = projects.slice(1);

  return (
    <section>
      {featuredProject ? (
        <>
          <h1>Featured Project</h1>
          <article className="featured-project">
            <h2>{featuredProject.title}</h2>
            <p>{featuredProject.description}</p>
            <p className="muted">
              Tech: {featuredProject.technologies.join(" • ")}
            </p>
            <Link to={`/projects/${featuredProject.id}`}>View project page</Link>
            {" • "}
            <a href={featuredProject.repoUrl} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </article>
        </>
      ) : null}

      <h1>Portfolio Projects</h1>
      <p className="muted">
        Replace these starter entries with your own work and add new projects in
        <code> src/data/projects.js</code>.
      </p>

      <div className="card-grid">
        {portfolioProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <h2>Open Project Spaces</h2>
      <div className="card-grid placeholders">
        <article className="card placeholder">RecipeTok</article>
        <article className="card placeholder">EditLab</article>
        <article className="card placeholder">Datapack Copilot</article>
      </div>
    </section>
  );
}

export default HomePage;
