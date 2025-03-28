import Navigation from "../components/NavigationBar";
import Footer from "../components/Footer";
function ContactMe(){
    return(
        <div>
            <Navigation />
            <main className="front">   
                <div className="contact-card">
                    <div className="contact-info">
                        <h1>Let's Connect</h1>
                        <p className="subtitle">
                            Have a project in mind or just want to say hello?  
                            Reach out—I’d love to hear from you!
                        </p>

                        <div className="contact-details">
                            <div className="detail-item">
                                <div className="detail-text">
                                    <h3>Email Me</h3>
                                    <p>preetpatel1862@gmail.com</p>
                                </div>
                            </div>

                            <div className="detail-item">
                                <div className="detail-text">
                                    <h3>Discord Handle</h3>
                                    <p>@mrxleaderz</p>
                                </div>
                            </div>

                            <div className="detail-item">
                                <div className="detail-text">
                                    <h3>Based In</h3>
                                    <p>NJ, USA</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <form className="contact-form" action="#" method="POST">
                        <div className="form-group">
                            <input type="text" id="name" className="form-input" placeholder=" " required/>
                            <label for="name" className="form-label">Your Name</label>
                        </div>

                        <div className="form-group">
                            <input type="email" id="email" className="form-input" placeholder=" " required/>
                            <label for="email" className="form-label">Email Address</label>
                        </div>

                        <div className="form-group">
                            <input type="text" id="subject" className="form-input" placeholder=" " required/>
                            <label for="subject" className="form-label">Subject</label>
                        </div>

                        <div className="form-group">
                            <textarea id="message" className="form-input" placeholder=" " required></textarea>
                            <label for="message" className="form-label">Your Message</label>
                        </div>

                        <button type="submit" className="submit-btn">
                            <i className="fas fa-paper-plane"></i> Send Message
                        </button>
                    </form>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default ContactMe;