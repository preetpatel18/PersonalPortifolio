import Navigation from "../components/NavigationBar";
import Footer from "../components/Footer";
import '../App.css';


function AboutMe(){
    return(
        <div>
            <Navigation />
            <main className="front">   
                <p>Add more things</p>
            </main>
            <Footer />
        </div>
    )
}

export default AboutMe;