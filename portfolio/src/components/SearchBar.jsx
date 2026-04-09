import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function SearchBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [query, setQuery] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const trimmed = query.trim();
    if (!trimmed) return;
    navigate(`/search?q=${encodeURIComponent(trimmed)}`);
    setQuery("");
  }

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        type="search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder={
          location.pathname === "/search"
            ? "Search again..."
            : "Search projects..."
        }
        aria-label="Search projects"
      />
      <button className="action-button" type="submit">
        Search
      </button>
    </form>
  );
}

export default SearchBar;
