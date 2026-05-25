import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaCode } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import "../assets/footer.css";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            Preet.dev
          </Link>

          <p>
            Building clean websites, software projects, and data-driven digital
            experiences.
          </p>
        </div>

        <div className="footer-links">
          <div className="footer-column">
            <h3>Navigate</h3>

            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/cert">Certs</Link>
            {/* <Link to="/studio">Studio</Link> */}
          </div>

          <div className="footer-column">
            <h3>Connect</h3>

            <a
              href="https://github.com/preetpatel18"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/preetp1826/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>

            <a
              href="https://leetcode.com/u/MrxNoobie/"
              target="_blank"
              rel="noreferrer"
            >
              LeetCode
            </a>

            <Link to="/contact">Contact Me</Link>
          </div>
        </div>

        <div className="footer-socials">
          <a
            href="https://github.com/preetpatel18"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/preetp1826/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://leetcode.com/u/MrxNoobie/"
            target="_blank"
            rel="noreferrer"
            aria-label="LeetCode"
          >
            <SiLeetcode />
          </a>

          <Link to="/projects" aria-label="Projects">
            <FaCode />
          </Link>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {year} Preet Patel. Built with React.</p>
        <span>Available for freelance work ✦</span>
      </div>
    </footer>
  );
}

export default Footer;