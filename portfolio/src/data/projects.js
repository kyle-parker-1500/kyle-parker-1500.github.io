export const projects = [
  {
    id: "recipetok",
    title: "RecipeTok",
    summary:
      "An Android recipe app with account flows, feed interactions, and saved/liked recipe views.",
    description:
      "RecipeTok is a mobile app that relies on a local FastAPI backend and uses Room persistence on-device. It includes user-facing recipe browsing plus liked and saved recipe management.",
    technologies: ["Android", "Java", "Room", "SQLite", "OkHttp", "Material UI"],
    repoUrl: "https://github.com/kyle-parker-1500/RecipeTok",
  },
  {
    id: "recipe-api-for-recipetok",
    title: "RecipeAPIForRecipeTok",
    summary:
      "A FastAPI + SQLite backend that serves and manages recipes for the RecipeTok Android app.",
    description:
      "This API exposes endpoints for listing, retrieving, creating, and deleting recipes. It initializes its SQLite schema at startup and acts as the local data service for RecipeTok.",
    technologies: ["Python", "FastAPI", "Pydantic", "SQLite", "Uvicorn"],
    repoUrl: "https://github.com/kyle-parker-1500/RecipeAPIForRecipeTok",
  },
  {
    id: "amazon-nova-hackathon",
    title: "Minecraft Datapack Copilot (Amazon Nova Hackathon)",
    summary:
      "A hackathon project that generates valid Minecraft datapacks using Amazon Nova.",
    description:
      "The project combines a Python backend, a Vite/React frontend, and a validation loop that checks generated datapacks and feeds fixes back into the model until output is valid.",
    technologies: [
      "Amazon Nova",
      "Python",
      "Vite",
      "React",
      "Tailwind",
      "Validation Pipelines",
    ],
    repoUrl: "https://github.com/kyle-parker-1500/amazon-nova-hackathon",
  },
  {
    id: "benkyo-box",
    title: "Benkyo Box",
    summary:
      "An Express + EJS study app foundation with MySQL connectivity and starter routes.",
    description:
      "Benkyo Box (quizlet_remake) is a Node.js project that sets up server rendering with EJS and uses mysql2 with pooled DB connections. It includes environment-based configuration and test routes for DB checks.",
    technologies: ["Node.js", "Express", "EJS", "MySQL", "mysql2"],
    repoUrl: "https://github.com/kyle-parker-1500/benkyo-box",
  },
  {
    id: "edit-lab",
    title: "EditLab",
    summary:
      "A Flask-based collaborative image-editing project with filters and in-progress editing tools.",
    description:
      "EditLab provides image processing workflows with Python/Flask, Pillow-based effects, and a web interface for editing. The project includes implemented filters plus planned tools like crop, draw, and undo/redo.",
    technologies: ["Python", "Flask", "Pillow", "Bootstrap-Flask", "HTML/CSS"],
    repoUrl: "https://github.com/kyle-parker-1500/EditLab",
  },
];
