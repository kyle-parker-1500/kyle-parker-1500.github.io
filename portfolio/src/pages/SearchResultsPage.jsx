import { Link, useSearchParams } from "react-router-dom";
import PortfolioCard from "../components/PortfolioCard";
import { projects } from "../data/projects";

function SearchResultsPage() {
  const [searchParams] = useSearchParams();
  const query = (searchParams.get("q") || "").trim().toLowerCase();

  const filteredProjects = projects.filter((project) => {
    const values = [
      project.title,
      project.summary,
      project.description,
      project.technologies.join(" "),
    ].join(" ");
    return values.toLowerCase().includes(query);
  });

  return (
    <section>
      <h1>Search Results</h1>
      <p className="muted">
        Showing results for: <strong>{query || "empty query"}</strong>
      </p>

      {query && filteredProjects.length > 0 ? (
        <div className="card-grid">
          {filteredProjects.map((project) => (
            <PortfolioCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <p>No matching projects found. Try another keyword.</p>
      )}

      <p className="action-row">
        <Link className="action-button action-button-secondary" to="/">
          Back to Portfolio
        </Link>
      </p>
    </section>
  );
}

export default SearchResultsPage;
