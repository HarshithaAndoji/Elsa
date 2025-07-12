import "./App.css";

import React, { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import Resume from "../public/assets/Harshitha_Resume.pdf";
import OTS from "./assets/OTS.png";
import PosterBannerTool from "./assets/PosterBannerTool.png";
import UploadDocTool from "./assets/UploadDocTool.png";
import GenzFit from "./assets/GenzFit.png";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaDatabase,
  FaJs,
  FaSass,
  FaCloud,
} from "react-icons/fa";
import { SiMongodb, SiExpress, SiMysql } from "react-icons/si";


import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaPhoneAlt,
  FaDownload,
} from "react-icons/fa";
import {
  faHouse,
  faLaptopCode,
  faFileLines,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

import Header from "./components/Header";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
     const [menuOpen, setMenuOpen] = useState(false);
 


  useEffect(() => {
    const revealElements = document.querySelectorAll(
      ".reveal, .reveal-left, .reveal-right"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.1 }
    );

    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect(); // cleanup on unmount
  }, []);



  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);





 

  return (
    <>
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} />
      </button>
      <div
        className="mouse-circle"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
        }}
      ></div>

      <Header menuOpen={menuOpen}/>

      <div className="into_backdrop">
        <Home />
        <AboutMe />
        <Education />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
