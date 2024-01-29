import React from "react";
import "./skill.css";
// import { Link } from "react-scroll";
import UIDesign from "../../Components/Skills/UIdesign.jpg";
import Webdesign from "../../Components/Skills/Websitedesign.jpeg";
import Appdesign from "../../Components/Skills/Mobile design.jpeg";

const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">What I do</span><br/>
      <span className="skilldescription">
      I am a skilled and passionate <b>Web Designer</b> with experience in creating
      visually appealing and user-friendly
      <br />
      websites. I have a strong understading of design and a keen eye for
      detail. I am proficient in <b>HTML5</b>, <b>CSS</b>,
      <br />
      and <b>Javascript</b>, <b>React js</b> as well as <b>Design software</b> such as Adobe Photoshop and
      Illustrator.
      </span>
      
      <div className="skillBars">
        {/* First DIV */}
        <div className="skillBar">
            <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
           <div className="skillBarText">
            <h2>UI/UX Design</h2>
            <p>"I craft intuitive and visually appealing user experiences by seamlessly blending user-centric design principles with a keen eye for aesthetics, transforming ideas into interactive and engaging digital solutions."</p>
           </div>

        </div>
        {/* Second DIV */}
        <div className="skillBar">
            <img src={Webdesign} alt="WebDesign" className="skillBarImg" />
           <div className="skillBarText">
            <h2>Website Design</h2>
            <p>
"Passionate about crafting visually stunning and user-friendly websites, I specialize in turning concepts into captivating online experiences. With a focus on responsive design and intuitive navigation, I bring creativity and functionality together to enhance digital presence and user satisfaction."</p>
           </div>

        </div>
        {/* Third DIV */}
        <div className="skillBar">
            <img src={Appdesign} alt="AppDesign" className="skillBarImg" />
           <div className="skillBarText">
            <h2>App Design</h2>
            <p>"Specializing in app design, I bring creativity and functionality to every pixel. With a user-centric approach, I transform ideas into visually compelling and intuitive mobile experiences, ensuring seamless interactions and engaging interfaces that captivate users."</p>
           </div>

        </div>
    
      </div>




    </section>
  );
};

export default Skills;
