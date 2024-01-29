import React, { useRef } from "react";
import "./contact.css";
import GW from "../../Components/Contact/GW.jpeg";
import IK from "../../Components/Contact/IK.jpeg";
import Facebook from "../../Components/Contact/Facebook.jpeg";
import Instagram from "../../Components/Contact/INSTA.jpeg";
import Twitter from "../../Components/Contact/Twitter.png";
import Linkedin from "../../Components/Contact/LINKEDIN.jpeg";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  // Adding "Email Services" to the "Contact Form"
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0yuqohr",
        "template_f54b365",
        form.current,
        "8b8JtQvED65i9PLp4"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          alert("Email Sent !");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    // "Section containing Clients Data".
    // "Which includes "Haeding", "Para", "Logos of Clients".
    <section id="contactpage">
      <div id="clients">
        <h1 className="contactpageTitle">My Clients</h1>
        <p className="clientsdescription">
          I have had the opportunity to work with a diverse group of companies.
          <br />
          Some of the notable companies I have worked with includes
        </p>
        <div className="clientImgs">
          <img src={GW} alt="" className="clientImg" />
          <img src={IK} alt="" className="clientImg" />
        </div>
      </div>

      {/* Another "Section Containing Contacts" */}
      {/* Which includes Another "Heading", "Google Form", "Button", "Links of My Social Media Network" */}
      <div id="contact">
        <h1 className="contactpageTitle">Contact Me</h1>
        <span className="contactdescription">
          Please fill out the form below to discuss any work opportunaties
        </span>
        <form className="contactform" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            className="name"
            placeholder="Your Name"
            namejs="your_name"
          />
          <input
            type="email"
            className="email"
            placeholder="Your Email"
            emailjs="your_email"
          />
          <textarea
            className="msg"
            namejs="message"
            rows="5"
            placeholder="Your Message"
          ></textarea>
          <button type="submit" value="send" className="submitbtn">
            Submit
          </button>
          <div className="links">
            <a href="https://www.facebook.com">
              <img src={Facebook} alt="FACEBOOK" className="link" />
            </a>
            <img src={Instagram} alt="INSTAGRAM" className="link" />
            <img src={Linkedin} alt="LINKEDIN" className="link" />
            <img src={Twitter} alt="TWITTER" className="link" />
          </div>
        </form>
      </div>
    </section>
  );
};
export default Contact;
