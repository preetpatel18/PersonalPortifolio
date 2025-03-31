import Navigation from "../components/NavigationBar";
import Footer from "../components/Footer";

function Projects(){
    return(
        <div>
            <Navigation />
            <main className="front">   
                <div class="roadmap-container">
                    <div class="roadmap-header">
                        <h1 class="roadmap-title">Project</h1>
                        <p class="roadmap-subtitle">Key milestones and development progress</p>
                    </div>

                    <div class="timeline">
                        <div class="timeline-item visible">
                            <div class="timeline-marker"></div>
                            <div class="timeline-card">
                                <div class="timeline-date">February 2025</div>
                                <h3 class="timeline-title">RU-LockedIn</h3>
                                <p class="timeline-description">
                                    An application that generates personalized four-year course plans based on a student's major and academic requirements.
                                </p>
                                <span class="timeline-status">In Progress</span>
                            </div>
                        </div>
                        <div class="timeline-item completed visible">
                                <div class="timeline-marker"></div>
                                <div class="timeline-card">
                                    <div class="timeline-date">Spring 2025 - BITS Hackathon</div>
                                    <h3 class="timeline-title">Traffic Data Analysis.</h3>
                                    <p class="timeline-description">
                                        Using R and Python, we created detailed graphical analysis of traffic accidents happening due to Time, location, Weather, and much more.
                                    </p>
                                    <a href = "https://github.com/preetpatel18/Datathon" target="_blank" rel="noreferrer" ><span class="timeline-status">Github</span></a>
                                </div>
                        </div>

                        <div class="timeline-item completed visible">
                            <div class="timeline-marker"></div>
                            <div class="timeline-card">
                                <div class="timeline-date">Spring 2025</div>
                                <h3 class="timeline-title">Beacon</h3>
                                <p class="timeline-description">
                                Beacon is an AI-powered wildfire detection and monitoring system that integrates NASA's FIRMS for real-time fire data visualization and predictive analytics.
                                </p>
                                <span class="timeline-status"><a href="https://github.com/preetpatel18/Beacon" target="_blank" rel="noreferrer" >Github</a></span> 
                            </div>
                        </div>

                        <div class="timeline-item completed visible">
                            <div class="timeline-marker"></div>
                            <div class="timeline-card">
                                <div class="timeline-date">Fall 2024</div>
                                <h3 class="timeline-title">CureBytes</h3>
                                <p class="timeline-description">
                                    Designed to aid medical schools in enhancing the student experience through innovative tools and resources
                                </p>
                                <span class="timeline-status"><a href="https://github.com/preetpatel18/Health-HackRU-Hackathon" target="_blank" rel="noreferrer" >Github</a></span> 
                            </div>
                        </div>

                        <div class="timeline-item completed visible">
                            <div class="timeline-marker"></div>
                            <div class="timeline-card">
                                <div class="timeline-date">Fall 2024</div>
                                <h3 class="timeline-title">Data Structures</h3>
                                <p class="timeline-description">
                                    This repository contains implementations of fundamental data structures and algorithms, designed to help with learning, practicing, and improving problem-solving skills using java in my Data Structure Course.
                                </p>
                                <span class="timeline-status"><a href="https://github.com/preetpatel18/Data-Structures/" target="_blank" rel="noreferrer" >Github</a></span> 
                            </div>
                        </div>

                        <div class="timeline-item completed visible">
                            <div class="timeline-marker"></div>
                            <div class="timeline-card">
                                <div class="timeline-date">2022</div>
                                <h3 class="timeline-title">Battleship</h3>
                                <p class="timeline-description">
                                    In my 10th-grade APCSA final project, I built an AI-powered Battleship game in Java, where the computer strategically attacks based on probability rather than randomness, teaching me advanced class management and earning one of the highest scores in my section.    
                                </p>
                                <span class="timeline-status"><a href="https://github.com/preetpatel18/BattleShip-AI" target="_blank" rel="noreferrer" >Github</a></span> 
                            </div>
                        </div>


                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Projects;