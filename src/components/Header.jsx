import React  from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faLaptopCode,
  faFileLines,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";


const Header = ({menuOpen}) => {
 

  return (
    <>
      <div className="navbar">
        <div className="navcontent">
          <div className="logo">
            <span id="H">H</span>arshitha
          </div>
          <ul className="navitems">
            <li>
              <a href="#home" className="reveal-right">
                <FontAwesomeIcon icon={faHouse} /> Home
              </a>
            </li>
            <li>
              <a href="#about" className="reveal-right">
                <FontAwesomeIcon icon={faUser} /> About Me
              </a>
            </li>
            <li>
              <a href="#skills" className="reveal-right">
                <FontAwesomeIcon icon={faLaptopCode} /> Tech Stack
              </a>
            </li>
            <li>
              <a href="#contact" className="reveal-right">
                <FontAwesomeIcon icon={faEnvelope} /> Contact
              </a>
            </li>
            <li>
              <a href="#projects" className="reveal-right">
                <FontAwesomeIcon icon={faFileLines} /> Projects
              </a>
            </li>
          </ul>
        </div>
      </div>
          <ul className={`mobile-menu ${menuOpen ? "open" : ""}`}>
              <li  className="reveal-right">
                <a href="#home" >
                  <FontAwesomeIcon icon={faHouse} /> Home
                </a>
              </li>
              <li className="reveal-right">
                <a href="#about" >
                  <FontAwesomeIcon icon={faUser} /> About Me
                </a>
              </li>
              <li  className="reveal-right">
                <a href="#skills" > 
                  <FontAwesomeIcon icon={faLaptopCode} /> Tech Stack
                </a>
              </li>
              <li className="reveal-right">
                <a href="#contact" >
                  <FontAwesomeIcon icon={faEnvelope} /> Contact
                </a>
              </li>
              <li className="reveal-right">
                <a href="#projects" >
                  <FontAwesomeIcon icon={faFileLines} /> Projects
                </a>
              </li>
            </ul>
    </>
  );
};

export default Header;
