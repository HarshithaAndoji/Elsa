import "./App.css";
import { BASE_URL } from "./apiConfig";
import React, { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProfilePic from "./assets/ProfilePic.jpeg";
import StAnnsLogo from "./assets/StAnnsLogo.jpg";
import StPiousLogo from "./assets/StPiousLogo.jpg";
import OuLogo from "./assets/OuLogo.jpg";
import AboutMe from "./assets/AboutMe.jpeg";
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

import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
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
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    setTimeout(() => setStatus(""), 3000);
    try {
      const res = await fetch(`${BASE_URL}/api/contact`, {
        // 🛠️ ADD `http://` to avoid network error
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        // setStatus("Message sent!");
        setPopupMessage("Message sent successfully!");
        setShowPopup(true);
        console.log("Message sent!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        const errorData = await res.json();
        // setStatus(`Failed: ${errorData.error || "Unknown error"}`);
        setPopupMessage(`Failed: ${errorData.error || "Unknown error"}`);
        setShowPopup(true);
        console.log("Message not sent!");
      }
    } catch (err) {
      console.error(err);
      setStatus("Error occurred...Please try again later.");
      setTimeout(() => setStatus(""), 3000);
    }
  };

  const skillData = [
    { icon: <FaHtml5 />, name: "HTML5", color: "text-danger" },
    { icon: <FaCss3Alt />, name: "CSS3", color: "text-primary" },
    { icon: <FaJs />, name: "JavaScript", color: "text-warning" },
    { icon: <FaReact />, name: "ReactJS", color: "text-info" },
    { icon: <FaSass />, name: "Sass", color: "text-pink" },
    { icon: <FaNodeJs />, name: "NodeJS", color: "text-success" },
    { icon: <SiExpress />, name: "ExpressJS", color: "text-dark" },
    { icon: <SiMysql />, name: "MySQL", color: "text-primary" },
    { icon: <SiMongodb />, name: "MongoDB", color: "text-success" },
    { icon: <FaCloud />, name: "Azure Blob", color: "text-info" },
    {
      icon: <i className="fas fa-network-wired" />,
      name: "RESTful APIs",
      color: "text-secondary",
    },
  ];

  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    cardRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const projectData = [
    {
      img: OTS,
      title: "Online Test Series",
      desc: `Built dynamic versions with backend support for real-time exam series and video lecture interaction.
Practice Question Bank (PQB) created for IIT JEE aspirants with instant feedback, solutions, and flexible test control.`,
    },
    {
      img: PosterBannerTool,
      title: "Poster Banner Tool",
      desc: "Built reusable UI components for managing banners efficiently within the website interface.",
    },
    {
      img: UploadDocTool,
      title: "Document Upload Tool",
      desc: "Developed a document uploader for text/images with secure, organized storage solutions.",
    },
    {
      img: GenzFit,
      title: "GenzFit Wellness App",
      desc: `Genzfit is a full-stack web application designed to help users maintain a healthy lifestyle by combining physical fitness, mental wellness, and daily habit tracking in one platform.`,
    },
  ];

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
            <div className="contact_icons">
              <a href="mailto:andojiharshitha194@gmail.com" className="icons">
                <FaEnvelope style={{ color: "white" }} className="icon" />
              </a>

              <a href="tel:+919121325626" className="icons">
                <FaPhoneAlt style={{ color: "white" }} className="icon" />
              </a>

              <a
                href="https://www.linkedin.com/in/harshitha-andoji/"
                target="_blank"
                rel="noopener noreferrer"
                className="icons"
              >
                <FaLinkedin style={{ color: "white" }} className="icon" />
              </a>
            </div>
          </div>
          <div class="image-content">
            <img src={ProfilePic} alt="Profile" class="profile-pic" />
          </div>
        </div>
        <div className="about-container">
          <h1 className="about-title">
            About <span id="letter">M</span>e
          </h1>
          <div className="about-content">
            <div className="about-text">
              <p>
                I'm <strong>Harshitha Andoji</strong>, a passionate Full Stack
                Developer with 2 years of experience building responsive and
                high-performance web applications using the{" "}
                <strong>MERN Stack</strong> (MongoDB, Express.js, React.js,
                Node.js). I specialize in intuitive UIs with React.js and robust
                backends using Node.js, MySQL, and MongoDB.
                <br />
                <br />
                At <strong>eGRADTutor Academy</strong>, I led frontend
                development, implemented SSR, lazy loading, JWT authentication,
                and managed CI/CD pipelines with GitHub Actions— boosting
                performance by 30%.
                <br />
                <br />
                Previously, I built a real-time Stack Overflow clone during my
                internship at
                <strong> Null Class</strong>, sharpening my skills in RESTful
                APIs and full-stack integration. I'm certified in Front-End
                Development, Generative AI, and Programming Fundamentals.
                <br />
                <br />I love writing clean code and solving complex problems,
                and I'm currently seeking opportunities to contribute to
                impactful tech teams.
              </p>
            </div>
          </div>
        </div>

        {/* <div className="education-progress">
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
        </div> */}
        {/* <div className="education-progress">
          <h1>Education</h1>
          <div className="progress-container">
            <div className="circle-container">
              <div className="circle">
                <img src={StAnnsLogo} alt="St Anns" />
              </div>
              <p className="edu-title">St. Ann's Junior College</p>
              <p>Intermediate</p>
              <p className="edu-year">2017 - 2019</p>
            </div>

            <div className="line" />

            <div className="circle-container">
              <div className="circle">
                <img src={StPiousLogo} alt="St Pious" />
              </div>
              <p className="edu-title">St. Pious X Degree And PG College</p>
              <p>B.Sc Computer Science</p>
              <p className="edu-year">2019 - 2022</p>
            </div>

            <div className="line" />

            <div className="circle-container">
              <div className="circle">
                <img src={OuLogo} alt="OU" />
              </div>
              <p className="edu-title">PGRRCDE-Osmania University</p>
              <p>Master of Computer Applications</p>
              <p className="edu-year">2022 - 2024</p>
            </div>
          </div>
        </div> */}
        <div id="education">
          <h1 className="education-title">Education</h1>
          <div className="timeline">
            <div className="timeline-item">
              <div className="logo-container">
                <img src={StAnnsLogo} alt="St Anns" className="edu-logo" />
              </div>
              <div className="edu-info">
                <p className="edu-institution">St. Ann's Junior College</p>
                <p className="edu-degree">Intermediate</p>
                <p className="edu-year">2017 - 2019</p>
              </div>
            </div>

            <div className="timeline-bar"></div>

            <div className="timeline-item">
              <div className="logo-container">
                <img src={StPiousLogo} alt="St Pious" className="edu-logo" />
              </div>
              <div className="edu-info">
                <p className="edu-institution">
                  St. Pious X Degree And PG College
                </p>
                <p className="edu-degree">B.Sc Computer Science</p>
                <p className="edu-year">2019 - 2022</p>
              </div>
            </div>

            <div className="timeline-bar"></div>

            <div className="timeline-item">
              <div className="logo-container">
                <img src={OuLogo} alt="OU" className="edu-logo" />
              </div>
              <div className="edu-info">
                <p className="edu-institution">PGRRCDE-Osmania University</p>
                <p className="edu-degree">Master of Computer Applications</p>
                <p className="edu-year">2022 - 2024</p>
              </div>
            </div>
          </div>
        </div>

        <div id="skills">
          <div>
            <h1>Technologies I Worked On</h1>

            <div className="skills-grid">
              {skillData.map((skill, index) => (
                <div
                  key={index}
                  className={`skill-card ${skill.color}`}
                  ref={(el) => (cardRefs.current[index] = el)}
                >
                  <div className="skill-icon">{skill.icon}</div>
                  <div className="skill-name">{skill.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="projects-container">
          <h1 className="projects-title">Projects</h1>
          <div className="projects-grid">
            {projectData.map((proj, index) => (
              <div key={index} className="project-card">
                <img
                  src={proj.img}
                  alt={proj.title}
                  className="project-image"
                />
                <div className="project-overlay">
                  <h3>{proj.title}</h3>
                  <p>{proj.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="contact-container">
          <h1 className="contact-heading">
            Contact <span id="letter">M</span>e
          </h1>

          <div className="contact-content">
            {" "}
            {/* Flex Container for Side-by-Side */}
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
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="form-input"
              />

              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="form-input"
              />

              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
                className="form-textarea"
              />

              <button type="submit" className="submit-button">
                Send Message
              </button>
              <p>{status}</p>
              {showPopup && (
                <div className="popup-overlay">
                  <div className="popup">
                    <p>{popupMessage}</p>
                    <button onClick={() => setShowPopup(false)}>OK</button>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
        <div className="footer">
          <div className="footer-container">
            <small className="footer-text">
              © 2025 Harshitha. All rights reserved.
            </small>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
