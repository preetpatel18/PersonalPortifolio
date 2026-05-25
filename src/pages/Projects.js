import Navigation from "../components/NavigationBar";
import Footer from "../components/Footer";
import "../assets/projects.css";

function Projects() {
  return (
    <div>
      <Navigation />

      <main className="projects-page">
        <div className="roadmap-container">
          <div className="roadmap-header">
            <p className="section-tag">TIMELINE</p>
            <h1 className="roadmap-title">Projects</h1>
            <p className="roadmap-subtitle">
              Key milestones, hackathon builds, class projects, and software development progress.
            </p>
          </div>

          <div className="timeline">
            <div className="timeline-item visible">
              <div className="timeline-marker"></div>
              <div className="timeline-card">
                <div className="timeline-date">May 2025</div>
                <h3 className="timeline-title">Rhea AI</h3>
                <p className="timeline-description">
                  An AI-based web app that turns boring presentations into a fully visual learning experience.
                </p>
                <span className="timeline-status in-progress">In Progress</span>
              </div>
            </div>

            <div className="timeline-item visible">
              <div className="timeline-marker"></div>
              <div className="timeline-card">
                <div className="timeline-date">February 2025</div>
                <h3 className="timeline-title">RU-LockedIn</h3>
                <p className="timeline-description">
                  An application that generates personalized four-year course plans based on a student's major and academic requirements.
                </p>
                <span className="timeline-status in-progress">In Progress</span>
              </div>
            </div>

            <div className="timeline-item completed visible">
              <div className="timeline-marker"></div>
              <div className="timeline-card">
                <div className="timeline-date">Spring 2025 - Data 101</div>
                <h3 className="timeline-title">Data Analysis on US Tariffs</h3>
                <p className="timeline-description">
                  A data-driven R project analyzing 34 years of U.S. trade to evaluate global tariff imbalances, with case studies on China and Canada.
                </p>
                <a
                  href="https://github.com/preetpatel18/A-Data-on-U.S.-Tariff-and-Trade-Fairness/tree/main"
                  target="_blank"
                  rel="noreferrer"
                  className="timeline-link"
                >
                  Github
                </a>
              </div>
            </div>

            <div className="timeline-item completed visible">
              <div className="timeline-marker"></div>
              <div className="timeline-card">
                <div className="timeline-date">Spring 2025 - IEEE Hackathon</div>
                <h3 className="timeline-title">SketchFlow</h3>
                <p className="timeline-description">
                  Using React and Node.js, we created a fully functional sketch-to-React application.
                </p>
                <a
                  href="https://github.com/preetpatel18/SketchFlow"
                  target="_blank"
                  rel="noreferrer"
                  className="timeline-link"
                >
                  Github
                </a>
              </div>
            </div>

            <div className="timeline-item completed visible">
              <div className="timeline-marker"></div>
              <div className="timeline-card">
                <div className="timeline-date">Spring 2025 - BITS Hackathon</div>
                <h3 className="timeline-title">Traffic Data Analysis</h3>
                <p className="timeline-description">
                  Using R and Python, we created graphical analysis of traffic accidents based on time, location, weather, and more.
                </p>
                <a
                  href="https://github.com/preetpatel18/Datathon"
                  target="_blank"
                  rel="noreferrer"
                  className="timeline-link"
                >
                  Github
                </a>
              </div>
            </div>

            <div className="timeline-item completed visible">
              <div className="timeline-marker"></div>
              <div className="timeline-card">
                <div className="timeline-date">Spring 2025</div>
                <h3 className="timeline-title">Beacon</h3>
                <p className="timeline-description">
                  Beacon is an AI-powered wildfire detection and monitoring system that integrates NASA's FIRMS for real-time fire data visualization and predictive analytics.
                </p>
                <a
                  href="https://github.com/preetpatel18/Beacon"
                  target="_blank"
                  rel="noreferrer"
                  className="timeline-link"
                >
                  Github
                </a>
              </div>
            </div>

            <div className="timeline-item completed visible">
              <div className="timeline-marker"></div>
              <div className="timeline-card">
                <div className="timeline-date">Fall 2024</div>
                <h3 className="timeline-title">CureBytes</h3>
                <p className="timeline-description">
                  Designed to aid medical schools in enhancing the student experience through innovative tools and resources.
                </p>
                <a
                  href="https://github.com/preetpatel18/Health-HackRU-Hackathon"
                  target="_blank"
                  rel="noreferrer"
                  className="timeline-link"
                >
                  Github
                </a>
              </div>
            </div>

            <div className="timeline-item completed visible">
              <div className="timeline-marker"></div>
              <div className="timeline-card">
                <div className="timeline-date">Fall 2024</div>
                <h3 className="timeline-title">Data Structures</h3>
                <p className="timeline-description">
                  A repository containing implementations of fundamental data structures and algorithms using Java.
                </p>
                <a
                  href="https://github.com/preetpatel18/Data-Structures/"
                  target="_blank"
                  rel="noreferrer"
                  className="timeline-link"
                >
                  Github
                </a>
              </div>
            </div>

            <div className="timeline-item completed visible">
              <div className="timeline-marker"></div>
              <div className="timeline-card">
                <div className="timeline-date">2024</div>
                <h3 className="timeline-title">Stock Simulation</h3>
                <p className="timeline-description">
                  An interactive stock market app designed for teens and kids to make learning trading fun and safe.
                </p>
                <a
                  href="https://github.com/preetpatel18/Stock-Simulation"
                  target="_blank"
                  rel="noreferrer"
                  className="timeline-link"
                >
                  Github
                </a>
              </div>
            </div>

            <div className="timeline-item completed visible">
              <div className="timeline-marker"></div>
              <div className="timeline-card">
                <div className="timeline-date">2022</div>
                <h3 className="timeline-title">Battleship</h3>
                <p className="timeline-description">
                  An AI-powered Battleship game in Java where the computer attacks strategically based on probability rather than randomness.
                </p>
                <a
                  href="https://github.com/preetpatel18/BattleShip-AI"
                  target="_blank"
                  rel="noreferrer"
                  className="timeline-link"
                >
                  Github
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Projects;