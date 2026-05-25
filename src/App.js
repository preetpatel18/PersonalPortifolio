import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/AboutMe"
import Contact from "./pages/ContactMe"
import Projects from "./pages/Projects"
import Cert from "./pages/Certification";
import Studio from "./pages/CreativeStudio";
import Navbar from "./components/NavigationBar";
import Work from "./pages/work";
import NoPage from "./pages/NoPages"


function App(){
  return(
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element = {<Home/>} />
          <Route path="/home"  element = {<Home/>} />
          <Route path="/about"  element = {<About/>} />
          <Route path="/contact"  element = {<Contact/>} />
          <Route path="/projects"  element = {<Projects/>} />
          <Route path="/cert"  element = {<Cert/>} />
          <Route path="/studio"  element = {<Studio/>} />
          <Route path="/work"  element = {<Work/>} />
          <Route path="*"  element = {<NoPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;