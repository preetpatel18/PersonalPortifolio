import Navigation from "../components/NavigationBar";
import Footer from "../components/Footer";
import { FaGithub, FaLinkedin, FaInstagram, FaDiscord, FaYoutube} from 'react-icons/fa';
import { MdEmail } from "react-icons/md";
import personalportifolio from '../ProfilePict.png';
import '../App.css';


function AboutMe(){
    return(
        <div>
            <Navigation />
            <main className="front">   
                <div className="terminal">
                    <div className="header">
                        <img src={personalportifolio}
                            alt="Profile" 
                            className="avatar"/>
                        <div className="name-title">
                            <h1>Preet Patel</h1>
                            <p>Software Engineer</p>
                        </div>
                    </div>
                    
                    <div className="content-grid">
                        <div className="card">
                            <h2 className="card-title">BIO</h2>
                            <p className="bio">
                                Building interfaces for the next decade. Focused on performant, accessible, and visually stunning web experiences.
                            </p>
                        </div>
                        
                        <div className="card">
                            <h2 className="card-title">SKILLS</h2>
                            <div className="skills">
                                <span className="skill">React</span>
                                <span className="skill">Java</span>
                                <span className="skill">Python</span>
                                <span className="skill">HTML</span>
                                <span className="skill">Figma</span>
                                <span className="skill">CSS</span>
                                <span className="skill">JavaScript</span>
                                <span className="skill">MySQL</span>
                            </div>
                        </div>
                        
                        <div className="card">
                            <h2 className="card-title">CONTACT</h2>
                            <div className="contact-list">
                                <div className="contact-item">
                                    <MdEmail/>
                                    <span>preetpatel1862@gmail.com</span>
                                </div>
                                <div className="contact-item">
                                    <FaDiscord/>
                                    <span>@mrxleaderz</span>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <h2 className="card-title">CHECKOUT</h2>
                            <div className="social-links">
                                <a href="https://github.com/preetpatel18" target="_blank" rel="noreferrer" className="social-link"><FaGithub/></a>
                                <a href="https://www.linkedin.com/in/preetp1826/" target="_blank" rel="noreferrer" className="social-link"><FaLinkedin/></a>
                                <a href="https://www.instagram.com/preet18_p/" target="_blank" rel="noreferrer" className="social-link"><FaInstagram/></a>
                                <a href="https://www.youtube.com/@CoProgramming" target="_blank" rel="noreferrer" className="social-link"><FaYoutube/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default AboutMe;