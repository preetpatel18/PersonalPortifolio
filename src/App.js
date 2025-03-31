import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/AboutMe"
import Contact from "./pages/ContactMe"
import Projects from "./pages/Projects"
import NoPage from "./pages/NoPages"
function app(){
  return(
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element = {<Home/>} />
          <Route path="/Home"  element = {<Home/>} />
          <Route path="/AboutMe"  element = {<About/>} />
          <Route path="/ContactMe"  element = {<Contact/>} />
          <Route path="/Projects"  element = {<Projects/>} />
          <Route path="*"  element = {<NoPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default app;