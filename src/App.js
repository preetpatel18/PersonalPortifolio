import { useState, useEffect, useRef } from 'react';
import './App.css';
import project from './Projects.png';
import languages from './Languages.png';
function App() {
  // State management
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const lastScrollY = useRef(0);
  const navbarRef = useRef(null);

  // Throttle function for scroll events
  const throttle = (func, limit) => {
    let lastFunc;
    let lastRan;
    return function() {
      const context = this;
      const args = arguments;
      if (!lastRan) {
        func.apply(context, args);
        lastRan = Date.now();
      } else {
        clearTimeout(lastFunc);
        lastFunc = setTimeout(function() {
          if ((Date.now() - lastRan) >= limit) {
            func.apply(context, args);
            lastRan = Date.now();
          }
        }, limit - (Date.now() - lastRan));
      }
    };
  };
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY <= 0) {
        // At top of page
        setIsNavVisible(true);
      } else if (currentScrollY < lastScrollY.current && currentScrollY > 100) {
        // Scrolling up past threshold
        setIsNavVisible(true);
      } else if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        // Scrolling down past threshold
        setIsNavVisible(false);
      }
      
      lastScrollY.current = currentScrollY;
    };

    const handleResize = () => {
      if (window.innerWidth <= 800) {
        setIsNavVisible(true);
      }
    };
    

    const throttledScroll = throttle(handleScroll, 100);
    
    window.addEventListener('scroll', throttledScroll);
    window.addEventListener('resize', handleResize);
    
    // Initial check
    handleResize();

    return () => {
      window.removeEventListener('scroll', throttledScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <nav>
          {/* Main Navbar */}
          <div 
            ref={navbarRef}
            className={`navbar ${isNavVisible ? 'visible' : 'hidden'}`}
            style={{ top: isNavVisible ? '2%' : '-70px' }}
          >
            <button 
              className="menu-button disabled"
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded={isMenuOpen}
            >
            <i className="bx bx-menu"></i>
            </button>
            {/* Mobile Sidebar Menu */}
          <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
            <div className="sidebar-logo">
              <button 
                className="close-button disabled"
                onClick={() => setIsMenuOpen(false)}
                aria-label="Close menu"
              >
              <i className="bx bx-menu"></i>
              </button>
            </div>
            
            <ul className="links">
              <li><a href="home.html">Home</a></li>
              <li><a href="aboutme.html">About Me</a></li>
              <li><a href="https://github.com/preetpatel18">Contact Me</a></li>
              <li><a href="https://github.com/preetpatel18">Github</a></li>
              <li><a href="https://www.linkedin.com/in/preetp1826/">LinkedIn</a></li>
              <li><a href="https://leetcode.com/u/MrxNoobie/">LeetCode</a></li>
              {/* I do not see a reason to have a submenu as of Right*/}
              {/* <li className="submenu-container">
                <button 
                  className="submenu-toggle"
                  onClick={() => setIsSubMenuOpen(!isSubMenuOpen)}
                  aria-expanded={isSubMenuOpen}
                >
                  Links
                  <i className={`bx bxs-chevron-down links-arrow arrow ${isSubMenuOpen ? 'open' : ''}`}></i>
                </button>
                <ul className={`links-sub-menu sub-menu ${isSubMenuOpen ? 'open' : ''}`}>
                  <li><a href="https://github.com/preetpatel18">Github</a></li>
                  <li><a href="https://www.linkedin.com/in/preetp1826/">LinkedIn</a></li>
                  <li><a href="https://leetcode.com/u/MrxNoobie/">LeetCode</a></li>
                </ul>
              </li> */}
            </ul>
          </div>
          <div className="logo" aria-hidden="true"></div>
            <div className="info rubik">
              <p>CoPrograming</p>
              <p>Preet Patel</p>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="content">          
          <div className="box">
            <div className="image-container" aria-hidden="true">
              <img src={project} alt="Pic"></img>
            </div>
            <p className="btext rubik">
              PROJECTS
              <i className="bx bx-book"></i>
            </p>
          </div>
          
          <div className="box">
            <div className="image-container" aria-hidden="true">
            <img src={languages} alt="Pic"></img>
            </div>
            <p className="btext rubik">
              Languages
              <i className="bx bx-code"></i>
            </p>
          </div>
        </main>

        {/* Footer */}
        <footer className="footer">
          <div className="foot">
            <ul>
              <li><a href="https://github.com/preetpatel18">Github</a></li>
              <li><a href="https://www.linkedin.com/in/preetp1826/">LinkedIn</a></li>
              <li><a href="https://leetcode.com/u/MrxNoobie/">LeetCode</a></li>
              <li><a href="Contact.html">Contact</a></li>
            </ul>
          </div>
        </footer>
      </header>
    </div>
  );
}

export default App;