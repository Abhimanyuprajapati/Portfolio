import './navbar.css';
import { NavLink } from "react-router-dom";
export const Navbar = () => {
  return (
    <nav className='navbar'>
        <NavLink to="/">Home</NavLink>
        <NavLink to="about">About</NavLink>
        <NavLink to="skill">Skill</NavLink>
        <NavLink to="project">Project</NavLink>
        <NavLink to="contact">Contact</NavLink>
    </nav>
  )
};
