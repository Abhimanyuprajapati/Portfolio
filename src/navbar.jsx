import './navbar.css';
import { NavLink } from "react-router-dom";
export const Navbar = () => {
  return (
    <nav className='navbar'>

      <div className='navsymbol'>
        <span><NavLink to="/">@bhimanyu</NavLink></span>
      </div>
      <div className='navhead'>
       <li><NavLink to="/">Home</NavLink></li>
       <li><NavLink to="about">About</NavLink></li>
       <li><NavLink to="skill">Skill</NavLink></li>
       <li><NavLink to="project">Project</NavLink></li>
       <li><NavLink to="contact">Contact</NavLink></li>
      </div>

    </nav>
  )
};
