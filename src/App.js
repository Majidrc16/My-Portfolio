import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
import Intro from "./Components/Intro";
import Skills from "./Components/Skills";
import Works from "./Components/Works";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import { Element, scroller } from 'react-scroll';

function App() {
  return (
    <> 
      <Navbar/>
      <Intro/>
      <Skills/>
      <Works/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
