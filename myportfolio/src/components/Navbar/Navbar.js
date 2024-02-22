import React from 'react';
import './Navbar.css';
import {Link} from 'react-scroll';
import logo from '../../assets/Logo1.png';
const Navbar = () => {
  return (
    <nav className='Navbar'>
        <img src={logo} alt="logo" className="logoImg"/>
        
     <div className='Menu'>
        <Link className="menuItem">Introduction</Link>
        <Link className="menuItem">Education</Link>
        <Link className="menuItem">Work-Experience</Link>
        <Link className="menuItem">Projects</Link>
        <Link className="menuItem">Skills & Technologie</Link>
        <Link className="menuItem">Awards/Achievements</Link>
     </div>
       
        <button className='Contactbtn'>
        <span>Contact Me</span>
        </button>

    </nav>
  )
}

export default Navbar;