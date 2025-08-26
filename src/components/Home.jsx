import React, { useState, useEffect } from "react";
import { FaEnvelope, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import ProfilePic from "../assets/ProfilePic.jpeg";

const Home = () => {
  const [currentText, setCurrentText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const roles = [
    "a Full Stack Web Developer",
    "a Frontend Developer",
    "a Backend Developer",
    "a MERN Stack Developer",
  ];
  useEffect(() => {
    const currentRole = roles[roleIndex];
    const delay = deleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!deleting && charIndex < currentRole.length) {
        setCurrentText(currentRole.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (deleting && charIndex > 0) {
        setCurrentText(currentRole.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else {
        if (!deleting) {
          setTimeout(() => setDeleting(true), 1500);
        } else {
          setDeleting(false);
          setRoleIndex((roleIndex + 1) % roles.length);
        }
      }
    }, delay);

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, roleIndex, roles]);
  return (
    <>
      <div class="intro_container" id="home">
        <div class="text_content">
          <h1 className="greeting  reveal">Hi, I am</h1>
          <h1 class="name reveal">Harshitha Andoji</h1>
          <h2 className="title reveal">
            I am <span className="typing-text">{currentText}</span>
            <span className="cursor"></span>
          </h2>

          <h3 class="description reveal">
            I am a motivated and versatile individual, always eager to take on
            new challenges. With a passion for learning, I am dedicated to
            delivering high-quality results. I bring a positive attitude and a
            growth mindset, and I am ready to make meaningful contributions and
            achieve great things.
          </h3>
          <div className="contact_icons">
            <a
              href="mailto:andojiharshitha194@gmail.com"
              className="icons reveal-right"
            >
              <FaEnvelope style={{ color: "white" }} className="icon" />
            </a>

            <a href="tel:+919121325626" className="icons reveal-right">
              <FaPhoneAlt style={{ color: "white" }} className="icon " />
            </a>

            <a
              href="https://www.linkedin.com/in/harshitha-andoji/"
              target="_blank"
              rel="noopener noreferrer"
              className="icons reveal-right"
            >
              <FaLinkedin style={{ color: "white" }} className="icon" />
            </a>
          </div>
        </div>
        <div class="image-content">
          <img src={ProfilePic} alt="Profile" class="profile-pic reveal" />
        </div>
      </div>
    </>
  );
};

export default Home;
