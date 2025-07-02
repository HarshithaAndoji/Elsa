import "./App.css";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProfilePic from "./assets/ProfilePic.jpeg";
import StAnnsLogo from "./assets/StAnnsLogo.jpg";
import StPiousLogo from "./assets/StPiousLogo.jpg";
import OuLogo from "./assets/OuLogo.jpg";
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
  faEnvelope,
  faFileLines,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const roles = [
    "a Full Stack Web Developer",
    "a Frontend Developer",
    "a MERN Stack Developer",
  ];
  const [currentText, setCurrentText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

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
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };
const handleSubmit = async (e) => {
  e.preventDefault();
  setStatus('Sending...');

  try {
    const res = await fetch('http://localhost:5000/api/contact', {
      // 🛠️ ADD `http://` to avoid network error
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setStatus('Message sent!');
      setFormData({ name: '', email: '', message: '' });
    } else {
      const errorData = await res.json();
      setStatus(`Failed: ${errorData.error || 'Unknown error'}`);
    }
  } catch (err) {
    console.error(err);
    setStatus('Error occurred.');
  }
};


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

      <div className="navbar">
        <div className="navcontent">
          <div className="logo">
            <span id="H">H</span>arshitha
          </div>
          <ul className="navitems">
            <li>
              <FontAwesomeIcon icon={faHouse} /> Home
            </li>
            <li>
              <FontAwesomeIcon icon={faUser} /> About Me
            </li>
            <li>
              <FontAwesomeIcon icon={faLaptopCode} /> Tech Stack
            </li>
            <li>
              <FontAwesomeIcon icon={faEnvelope} /> Contact
            </li>
            <li>
              <FontAwesomeIcon icon={faFileLines} /> Resume
            </li>
          </ul>
        </div>
      </div>

      <ul className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <li>
          <FontAwesomeIcon icon={faHouse} /> Home
        </li>
        <li>
          <FontAwesomeIcon icon={faUser} /> About Me
        </li>
        <li>
          <FontAwesomeIcon icon={faLaptopCode} /> Tech Stack
        </li>
        <li>
          <FontAwesomeIcon icon={faEnvelope} /> Contact
        </li>
        <li>
          <FontAwesomeIcon icon={faFileLines} /> Resume
        </li>
      </ul>
      <div className="into_backdrop">
        <div class="intro_container">
          <div class="text_content">
            <h1 className="greeting">Hi, I am</h1>
            <h1 class="name">Harshitha Andoji</h1>
            <h2 className="title">
              I am <span className="typing-text">{currentText}</span>
              <span className="cursor"></span>
            </h2>

            <h3 class="description">
              I am a motivated and versatile individual, always eager to take on
              new challenges. With a passion for learning, I am dedicated to
              delivering high-quality results. I bring a positive attitude and a
              growth mindset, and I am ready to make meaningful contributions
              and achieve great things.
            </h3>
          </div>
          <div class="image-content">
            <img src={ProfilePic} alt="Profile" class="profile-pic" />
          </div>
        </div>
        <div className="education-progress">
          <h1>Education</h1>
          <div className="progress-container">
            <div className="circle">
              <img src={StAnnsLogo} alt="St Anns" />
            </div>
            <div className="line" />
            <div className="circle">
              <img src={StPiousLogo} alt="St Pious" />
            </div>
            <div className="line" />
            <div className="circle">
              <img src={OuLogo} alt="OU" />
            </div>
          </div>
        </div>
    <div className="contact-container">
  <h1 className="contact-heading">Get in Touch</h1>

  <div className="contact-info">
    <h5 className="info-heading">Contact Information</h5>

    <p className="info-item">
      <FaEnvelope className="icon" /> andojiharshitha194@gmail.com
    </p>

    <p className="info-item">
      <FaPhoneAlt className="icon" /> +91 9121325626
    </p>

    <p className="info-item">
      <a
        href="https://linkedin.com/in/harshitha-andoji"
        target="_blank"
        rel="noreferrer"
        className="contact-link"
      >
        <FaLinkedin className="icon" /> LinkedIn Profile
      </a>
    </p>

    <p className="info-item">
      <a
        href="https://github.com/HarshithaAndoji"
        target="_blank"
        rel="noreferrer"
        className="contact-link"
      >
        <FaGithub className="icon" /> GitHub Portfolio
      </a>
    </p>

    <a href="/resume.pdf" download className="download-resume">
      <FaDownload className="icon" /> Download Resume
    </a>
  </div>

  <form onSubmit={handleSubmit} className="contact-form">
    <label htmlFor="name" className="form-label">Name</label>
    <input
      type="text"
      id="name"
      name="name"
      value={formData.name}
      onChange={handleChange}
      required
      className="form-input"
    />

    <label htmlFor="email" className="form-label">Email</label>
    <input
      type="email"
      id="email"
      name="email"
      value={formData.email}
      onChange={handleChange}
      required
      className="form-input"
    />

    <label htmlFor="message" className="form-label">Message</label>
    <textarea
      id="message"
      name="message"
      rows="4"
      value={formData.message}
      onChange={handleChange}
      required
      className="form-textarea"
    />

    <button type="submit" className="submit-button">Send Message</button>
  </form>
</div>

      </div>
    </>
  );
}

export default App;
