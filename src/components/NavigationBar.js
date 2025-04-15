
import { useState, useEffect, useRef } from 'react';
import { throttle } from '../utils/throttle';
import "../App.css";

export default function Navigation() {
  // State management
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const lastScrollY = useRef(0);
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY <= 0) {
        setIsNavVisible(true);
      } else if (currentScrollY < lastScrollY.current && currentScrollY > 100) {
        setIsNavVisible(true);
      } else if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
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
    <nav>
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
              <li><a href="Home">Home</a></li>
              <li><a href="AboutMe">About Me</a></li>
              <li><a href="ContactMe">Contact Me</a></li>
              <li><a href="Cert">Skills</a></li>
              <li><a href="https://github.com/preetpatel18" target="_blank" rel="noreferrer">Github</a></li>
              <li><a href="https://www.linkedin.com/in/preetp1826/" target="_blank" rel="noreferrer">LinkedIn</a></li>
              <li><a href="https://leetcode.com/u/MrxNoobie/" target="_blank" rel="noreferrer"> LeetCode</a></li>
            </ul>
          </div>
          <div className="logo" aria-hidden="true"></div>
          <div className="info rubik">
            <p>CoPrograming</p>
            <p>Preet Patel</p>
          </div>
          </div>
        </nav>
    </nav>
  );
}