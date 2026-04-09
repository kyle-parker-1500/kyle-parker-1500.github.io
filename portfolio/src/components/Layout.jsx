import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import SearchBar from "./SearchBar";

function Layout() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("portfolio-theme");
    if (savedTheme === "dark" || savedTheme === "light") return savedTheme;
    return "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  function toggleTheme() {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }

  return (
    <div className="app-shell">
      <header className="site-header">
        <Link to="/" className="site-title">
          My Portfolio
        </Link>
        <button
          className="theme-toggle action-button action-button-secondary"
          onClick={toggleTheme}
          type="button"
        >
          {theme === "light" ? "Dark Mode" : "Light Mode"}
        </button>
        <SearchBar />
      </header>
      <main className="content">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
