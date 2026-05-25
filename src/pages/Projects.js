import Navigation from "../components/NavigationBar";
import Footer from "../components/Footer";
import "../assets/projects.css";

function Projects() {
  const projects = [
    {
      date: "May 2025",
      title: "Rhea AI",
      description:
        "An AI-based web app that turns boring presentations into a fully visual learning experience.",
      status: "In Progress",
      completed: false,
      link: "",
      website: "",
    },
    {
      date: "February 2025",
      title: "RU-LockedIn",
      description:
        "An application that generates personalized four-year course plans based on a student's major and academic requirements.",
      status: "In Progress",
      completed: false,
      link: "",
      website: "",
    },
    {
      date: "Spring 2025 - Data 101",
      title: "Data Analysis on US Tariffs",
      description:
        "A data-driven R project analyzing 34 years of U.S. trade to evaluate global tariff imbalances, with case studies on China and Canada.",
      status: "Github",
      completed: true,
      link: "https://github.com/preetpatel18/A-Data-on-U.S.-Tariff-and-Trade-Fairness/tree/main",
      website: "",
    },
    {
      date: "Spring 2025 - IEEE Hackathon",
      title: "SketchFlow",
      description:
        "Using React and Node.js, we created a fully functional sketch-to-React application. Users can sketch on the website and receive a ZIP file of their generated React application.",
      status: "Github",
      completed: true,
      link: "https://github.com/preetpatel18/SketchFlow",
      website: "",
    },
    {
      date: "Spring 2025 - BITS Hackathon",
      title: "Traffic Data Analysis",
      description:
        "Using R and Python, we created detailed graphical analysis of traffic accidents based on time, location, weather, and more.",
      status: "Github",
      completed: true,
      link: "https://github.com/preetpatel18/Datathon",
      website: "",
    },
    {
      date: "Spring 2025",
      title: "Beacon",
      description:
        "Beacon is an AI-powered wildfire detection and monitoring system that integrates NASA's FIRMS for real-time fire data visualization and predictive analytics.",
      status: "Github",
      completed: true,
      link: "https://github.com/preetpatel18/Beacon",
      website: "",
    },
    {
      date: "Fall 2024",
      title: "CureBytes",
      description:
        "Designed to aid medical schools in enhancing the student experience through innovative tools and resources.",
      status: "Github",
      completed: true,
      link: "https://github.com/preetpatel18/Health-HackRU-Hackathon",
      website: "https://health-hack-ru-main.vercel.app/",
    },
    {
      date: "Fall 2024",
      title: "Data Structures",
      description:
        "A repository containing implementations of fundamental data structures and algorithms using Java for my Data Structures course.",
      status: "Github",
      completed: true,
      link: "https://github.com/preetpatel18/Data-Structures/",
      website: "",
    },
    {
      date: "2024",
      title: "Stock Simulation",
      description:
        "An interactive and educational stock market app designed for teens and kids. The platform makes learning trading fun and safe through engaging activities.",
      status: "Github",
      completed: true,
      link: "https://github.com/preetpatel18/Stock-Simulation",
      website: "",
    },
    {
      date: "2022",
      title: "Battleship",
      description:
        "An AI-powered Battleship game in Java where the computer strategically attacks based on probability rather than randomness.",
      status: "Github",
      completed: true,
      link: "https://github.com/preetpatel18/BattleShip-AI",
      website: "",
    },
  ];

  return (
    <div>
      <Navigation />

      <main className="page projects-page">
        <div className="page-container">
          <div className="page-header">
            <p className="page-tag">Portfolio Projects</p>

            <h1 className="page-title">Projects</h1>

            <p className="page-subtitle">
              Key milestones, hackathon builds, class projects, and software
              development progress.
            </p>
          </div>

          <section className="projects-grid" aria-label="Project list">
            {projects.map((project, index) => (
              <article
                key={index}
                className="clean-card project-card"
              >
                <div className="project-card-top">
                  <span className="project-date">{project.date}</span>

                  <span
                    className={`project-status ${
                      project.completed ? "is-complete" : "is-progress"
                    }`}
                  >
                    {project.completed ? "Completed" : project.status}
                  </span>
                </div>

                <h2 className="project-title">{project.title}</h2>

                <p className="project-description">{project.description}</p>

                <div className="project-actions">
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="project-link"
                    >
                      {project.status}
                    </a>
                  ) : (
                    <span className="project-link project-link-disabled">
                      {project.status}
                    </span>
                  )}

                  {project.website && (
                    <a
                      href={project.website}
                      target="_blank"
                      rel="noreferrer"
                      className="project-link project-link-secondary"
                    >
                      Website
                    </a>
                  )}
                </div>
              </article>
            ))}
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Projects;
