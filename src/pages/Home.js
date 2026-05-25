import { useNavigate } from "react-router-dom";
import "../assets/home.css";

function Home() {
  const navigate = useNavigate();

  const cards = [
    {
      label: "Projects",
      icon: "↗",
      desc: "React apps, data pipelines, ML models & more.",
      page: "/projects",
    },
    {
      label: "Languages & Skills",
      icon: "◈",
      desc: "Python, TypeScript, R, SQL, and the full stack.",
      page: "/cert",
    },
    {
      label: "About Me",
      icon: "✦",
      desc: "Who I am, what drives me, and where I'm headed.",
      page: "/about",
    },
  ];

  return (
    <div className="home page-enter">
      {/* Hero */}
      <section className="home-hero">
        <div className="hero-content">
          <div className="section-tag">
            Computer Science · Data Science · Statistics · Mathematics
          </div>

          <h1 className="hero-title">
            Hi, I&apos;m <span className="ink-banner">Preet Patel</span>
          </h1>

          <p className="hero-description">
            Triple Major @ Rutgers University — Building my dream software,
            Website Portfolios, Graphic Designs, and Data Science projects.
          </p>

          <div className="hero-buttons">
            <span
              className="pill-btn filled"
              onClick={() => navigate("/projects")}
            >
              View Projects
            </span>

            <span className="pill-btn" onClick={() => navigate("/contact")}>
              Contact Me
            </span>
          </div>
        </div>
      </section>

      {/* Cards */}
      <section className="home-cards-section">
        <div className="home-cards-grid">
          {cards.map((card, i) => (
            <div
              key={i}
              className="doodle-card home-card"
              onClick={() => navigate(card.page)}
            >
              <div className="home-card-icon">{card.icon}</div>

              <div className="home-card-title">{card.label}</div>

              <div className="home-card-description">{card.desc}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;