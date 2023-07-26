import { Routes,Route } from "react-router-dom";
import { Navbar } from "./navbar";
import { Home } from "./home";
import { Skill } from "./skill";
import { Project } from "./project";
import { Contact } from "./contact";
import { About } from "./about";

function App(){
  return (
    <div>
      <Navbar/>
      <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="about" element={<About/>}/>
       <Route path="skill" element={<Skill/>}/>
       <Route path="project" element={<Project/>}/>
       <Route path="contact" element={<Contact/>}/>
      </Routes>
    </div>
  )
}
export default App;