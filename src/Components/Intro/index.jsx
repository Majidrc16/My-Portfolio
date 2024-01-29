import React from 'react';
import './intro.css';
import { Link } from 'react-scroll';
import btnImg  from '../../Components/Navbar/IMAGE.4.jpg';
import backimg from '../../Components/Intro/backgroungd.jpg';


const Intro = () => {
  return (
   <section id="intro">
    <div className="introcontent">
   <span className="hello">Hello,</span>
   <span className="introText">I'm 
   <span className='introName'>Majid RC</span><br/>
   Website Designer
   </span>
   <p className="intropara">
    I am a skilled and passionate web designer with experience in creating <br/>visually appealing and user friendly websites.
   </p>
   <Link><button className='btn' onClick={() =>{
        document.getElementById("contact").scrollIntoView({behavior:"smooth"});
      }}><img src={btnImg} alt='BIMAGE' className='btnImg'/>Hire me</button></Link>
    </div>
   </section>
  );
}
export default Intro;
