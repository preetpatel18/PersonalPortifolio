import Navigation from "../components/NavigationBar";
import Footer from "../components/Footer";
import { FaGithub, FaLinkedin, FaInstagram, FaDiscord, FaYoutube} from 'react-icons/fa';
import { MdEmail } from "react-icons/md";
import personalportifolio from '../images/ProfilePict.png';
import '../assets/aboutme.css';

function AboutMe(){
    return(
        <div>
            <Navigation />
            <main className="page about-page">   
                <div className="page-container about-container">
                    <div className="about-profile">
                    <div className="about-header">
                        <img src={personalportifolio}
                            alt="Profile" 
                            className="avatar"/>
                        <div className="name-title">
                            <h1>Preet Patel</h1>
                            <p>Student at Rutgers University - New Brunswick</p>
                        </div>
                    </div>
                    
                    <div className="about-grid">
                        <div className="about-card">
                            <h2 className="about-card-title">BIO</h2>
                            <p className="bio">
                                Hi, my name is Preet, I like to work in blah, blah, blah.... boring... I just enjoy hanging out with friends, playing videos games, and building softwares for the love of game.
                            </p>
                        </div>
                        
                        <div className="about-card">
                            <h2 className="about-card-title">RELEVENT COURSEWORK</h2>
                            <div className="skills">
                                <span className="skill">Data Structures</span>
                                <span className="skill">Computer Architecture</span>
                                <span className="skill">Calculus III, IV</span>
                                <span className="skill">Linear Algebra</span>
                                <span className="skill">Statistical Learning</span>
                                <span className="skill">Discrete Mathematics</span>
                            </div>
                        </div>
                        
                        <div className="about-card">
                            <h2 className="about-card-title">CONTACT</h2>
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
                        <div className="about-card">
                            <h2 className="about-card-title">CHECKOUT</h2>
                            <div className="social-links">
                                <a href="https://github.com/preetpatel18" target="_blank" rel="noreferrer" className="social-link"><FaGithub/></a>
                                <a href="https://www.linkedin.com/in/preetp1826/" target="_blank" rel="noreferrer" className="social-link"><FaLinkedin/></a>
                                <a href="https://www.instagram.com/preet18_p/" target="_blank" rel="noreferrer" className="social-link"><FaInstagram/></a>
                                <a href="https://www.youtube.com/@CoProgramming" target="_blank" rel="noreferrer" className="social-link"><FaYoutube/></a>
                            </div>
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
