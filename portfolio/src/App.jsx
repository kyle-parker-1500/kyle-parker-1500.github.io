import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import LandingPage from "./pages/LandingPage";
import ProjectPage from "./pages/ProjectPage";
import SearchResultsPage from "./pages/SearchResultsPage";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/projects/:projectId" element={<ProjectPage />} />
        <Route path="/search" element={<SearchResultsPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
