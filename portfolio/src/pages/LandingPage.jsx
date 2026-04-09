import { Link } from "react-router-dom";
import PortfolioCard from "../components/PortfolioCard";
import { projects } from "../data/projects";

function LandingPage() {
  const featuredProject = projects[0];
  const portfolioProjects = projects.slice(1);

  return (
    <section className="homepage">
      <div className="parallax-scene" aria-hidden="true">
        <div className="parallax-layer parallax-layer-back" />
        <div className="parallax-layer parallax-layer-mid" />
        <div className="parallax-layer parallax-layer-front" />
      </div>

      {featuredProject ? (
        <>
          <h1>Featured Project</h1>
          <article className="featured-project project-display">
            <span className="section-kicker">Current Highlight</span>
            <h2>{featuredProject.title}</h2>
            <p>{featuredProject.description}</p>
            <p className="muted">
              Tech: {featuredProject.technologies.join(" | ")}
            </p>
            <div className="action-row">
              <Link
                className="action-button"
                to={`/projects/${featuredProject.id}`}
              >
                Open Project
              </Link>
              <a
                className="action-button action-button-secondary"
                href={featuredProject.repoUrl}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>
          </article>
        </>
      ) : null}

      <h1>Portfolio Projects</h1>
      <p className="muted">
        Project entries are driven by
        <code> src/data/projects.js</code>.
      </p>

      <div className="card-grid">
        {portfolioProjects.map((project) => (
          <PortfolioCard key={project.id} project={project} />
        ))}
      </div>

      <h2>Project Shelf</h2>
      <div className="card-grid placeholders">
        <article className="card placeholder project-display">RecipeTok</article>
        <article className="card placeholder project-display">EditLab</article>
        <article className="card placeholder project-display">
          Datapack Copilot
        </article>
      </div>
    </section>
  );
}

export default LandingPage;
