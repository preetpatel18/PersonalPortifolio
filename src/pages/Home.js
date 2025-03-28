import Navigation from "../components/NavigationBar";
import project from '../Projects.png';
import Footer from "../components/Footer";
import personalportifolio from '../PersonalPortifolio.png';
import languages from '../Languages.png';

function Home(){
    return(
        <div>
            <Navigation />
            <main className="front">   
                <div class="profile-card">
                    <h1 class="profile-name">Hi, I'm Preet Patel</h1>
                    <h2 class="profile-title">Triple Major Computer Science, Data Science, Statistics/Mathematics and Minor in Business Administration @ Rutgers University</h2>
                    <div class="profile-filter">
                        <p class="profile-description">
                        As a multidisciplinary developer, I craft software that balances technical precision with human-centered design. My work lives at the intersection of robust systems and intuitive experiences – whether building data pipelines that tell compelling stories or applications that solve real user frustrations.
                        What drives me? The moment when complex technology fades into the background, leaving only seamless utility. I thrive on transforming theoretical knowledge from my studies into practical tools that make a difference.
                        </p>
                        <img class="startup" src={personalportifolio} alt="Pic"></img>
                    </div>
                    <p class="profile-description">Have an idea to work on? <button class="contact-btn">Contact Me</button></p>
                </div>
          
                <div class="content">
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
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Home;