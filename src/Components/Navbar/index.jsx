import React, {useState} from "react";
import "./nav.css";
import { Link } from 'react-scroll';
import image from '../../Components/Navbar/logo.png';
import contactimg  from '../../Components/Navbar/IMAGE.4.jpg';
import menu from '../../Components/Navbar/Menu.png';


const Navbar =()=> {
  const[showMenu, setShowMenu] = useState(false);
  return (
    
    <nav className="navbar">
      {/* Using "React Hooks" to show the "Navbar" on "Navmenu" */}
     


      <img src={image} alt="ima" className="image"/>
      <div className="desktopmenu">
        <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duraton={500} className="desktopmenuitems">Home</Link>
        <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-100} duraton={500}className="desktopmenuitems">About</Link>
        <Link activeClass="active" to="works" spy={true} smooth={true} offset={-100} duraton={500}className="desktopmenuitems">Portfolio</Link>
        <Link activeClass="active" to="clients" spy={true} smooth={true} offset={-100} duraton={500}className="desktopmenuitems">Clients</Link>
       
        
      </div>
      <button className="desktopmenubtn" onClick={() =>{
        document.getElementById("contact").scrollIntoView({behavior:"smooth"});
      }}>
        <img src={contactimg} alt="contactimgage" className="desktopmenuimage" />
        Contact me
      </button>

      {/* Adding "Burger Menu" to the "Navbar" */}
      <img src={menu} alt="menu" className="mobmenu" onClick={()=>setShowMenu(!showMenu)}/>
      <div className="navmenu" style={{display: showMenu? 'flex' : 'none'}}>
        <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duraton={500} className="ListItems" onClick={()=>setShowMenu(false)}>Home</Link>
        <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-100} duraton={500}className="ListItems" onClick={()=>setShowMenu(false)}>About</Link>
        <Link activeClass="active" to="works" spy={true} smooth={true} offset={-100} duraton={500}className="ListItems" onClick={()=>setShowMenu(false)}>Portfolio</Link>
        <Link activeClass="active" to="clients" spy={true} smooth={true} offset={-100} duraton={500}className="ListItems" onClick={()=>setShowMenu(false)}> Clients</Link>
        <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-100} duraton={500}className="ListItems" onClick={()=>setShowMenu(false)}>Contact</Link>
      </div>
    </nav>
  );
};
export default Navbar;
