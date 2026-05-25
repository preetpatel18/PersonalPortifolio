import { useNavigate } from "react-router-dom";
import { FaCode, FaUserAstronaut, FaReact, FaJava, FaPython } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { SiJavascript, SiMysql, SiR } from "react-icons/si";
import Navigation from "../components/NavigationBar";
import Footer from "../components/Footer";
import "../assets/home.css";

function Home() {
  const navigate = useNavigate();

  const cards = [
    {
      label: "Projects",
      icon: <FaCode />,
      desc: "React apps, data pipelines, ML models, hackathon builds, and full-stack experiments.",
      page: "/projects",
    },
    {
      label: "Languages & Skills",
      icon: <GiSkills />,
      desc: "Python, Java, JavaScript, R, SQL, React, data analysis, and backend development.",
      page: "/cert",
    },
    {
      label: "About Me",
      icon: <FaUserAstronaut />,
      desc: "Learn who I am, what I’m building, and how I’m growing as a developer.",
      page: "/about",
    },
  ];

  const skills = [
    <FaReact />,
    <SiJavascript />,
    <FaPython />,
    <FaJava />,
    <SiMysql />,
    <SiR />,
  ];

  return (
    <div className="home page-enter">
      <Navigation />

      <main>
        <section className="home-hero">
          <div className="home-bg-shape shape-one"></div>
          <div className="home-bg-shape shape-two"></div>
          <div className="home-bg-shape shape-three"></div>

          <div className="floating-code code-one">{"{ }"}</div>
          <div className="floating-code code-two">{"</>"}</div>
          <div className="floating-code code-three">{"01"}</div>

          <div className="hero-content">
            <div className="home-section-tag">
              Computer Science · Data Science · Statistics · Mathematics
            </div>

            <h1 className="hero-title">
              Hi, I&apos;m <span className="ink-banner">Preet Patel</span>
            </h1>

            <p className="hero-description">
              Rutgers student building software, websites, graphic designs, and data-driven projects that blend clean visuals with real functionality.
            </p>

            <div className="hero-stats">
              <div>
                <span>10+</span>
                <p>Projects</p>
              </div>

              <div>
                <span>5+</span>
                <p>Hackathons</p>
              </div>

              <div>
                <span>8+</span>
                <p>Skills</p>
              </div>
            </div>

            <div className="skill-orbit">
              {skills.map((skill, index) => (
                <div className="skill-bubble" key={index}>
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="home-cards-section">
          <div className="home-section-heading">
            <p className="home-section-tag">Explore</p>
            <h2>Where do you want to go?</h2>
          </div>

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

                <div className="home-card-link">
                  Open Page <span>→</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Home;
