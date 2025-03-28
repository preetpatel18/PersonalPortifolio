import Navigation from "../components/NavigationBar";
import Footer from "../components/Footer";
function ContactMe(){
    return(
        <div>
            <Navigation />
            <main className="front">   
                <div class="contact-card">
                    <div class="contact-info">
                        <h1>Let's Connect</h1>
                        <p class="subtitle">
                            Have a project in mind or just want to say hello?  
                            Reach out—I’d love to hear from you!
                        </p>

                        <div class="contact-details">
                            <div class="detail-item">
                                <div class="detail-icon">
                                    <i class="fas fa-envelope"></i>
                                </div>
                                <div class="detail-text">
                                    <h3>Email Me</h3>
                                    <a href="mailto:hello@example.com">hello@example.com</a>
                                </div>
                            </div>

                            <div class="detail-item">
                                <div class="detail-icon">
                                    <i class="fas fa-phone-alt"></i>
                                </div>
                                <div class="detail-text">
                                    <h3>Call Me</h3>
                                    <p>+1 (555) 123-4567</p>
                                </div>
                            </div>

                            <div class="detail-item">
                                <div class="detail-icon">
                                    <i class="fas fa-map-marker-alt"></i>
                                </div>
                                <div class="detail-text">
                                    <h3>Based In</h3>
                                    <p>San Francisco, CA</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <form class="contact-form" action="#" method="POST">
                        <div class="form-group">
                            <input type="text" id="name" class="form-input" placeholder=" " required/>
                            <label for="name" class="form-label">Your Name</label>
                        </div>

                        <div class="form-group">
                            <input type="email" id="email" class="form-input" placeholder=" " required/>
                            <label for="email" class="form-label">Email Address</label>
                        </div>

                        <div class="form-group">
                            <input type="text" id="subject" class="form-input" placeholder=" " required/>
                            <label for="subject" class="form-label">Subject</label>
                        </div>

                        <div class="form-group">
                            <textarea id="message" class="form-input" placeholder=" " required></textarea>
                            <label for="message" class="form-label">Your Message</label>
                        </div>

                        <button type="submit" class="submit-btn">
                            <i class="fas fa-paper-plane"></i> Send Message
                        </button>
                    </form>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default ContactMe;