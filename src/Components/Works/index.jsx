import React from "react";
import "./works.css";
import Portfolio1 from "../../Components/Works/Box.jpg";
import Portfolio2 from "../../Components/Works/Mart.jpg";
import Portfolio3 from "../../Components/Works/Construction Website.jpg";
import Portfolio4 from "../../Components/Works/Netflix.jpg";
import Portfolio5 from "../../Components/Works/Istaix.jpg";

const Works = () => {
  return (
    <section id="works">
      <h2 className="workstitle">My Portfolio</h2>
      <span className="worksdescription">
        I take pride in paying attention to the smallest details and making sure
        that my work is pixel
        <br />
        perfect. I am exicted to bring my skills and experience to help
        businesses
        <br />
        achieve their goals and create a strong online presences.
      </span>
      <div className="worksimages">
        <img src={Portfolio1} alt="" className="worksImg" />
        <img src={Portfolio2} alt="" className="worksImg" />
        <img src={Portfolio3} alt="" className="worksImg" />
        <img src={Portfolio4} alt="" className="worksImg" />
        <img src={Portfolio5} alt="" className="worksImg" />
      </div>
      <button className="worksbtn">See more</button>
    </section>
  );
};
export default Works;
