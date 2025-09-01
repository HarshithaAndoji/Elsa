import React, { useEffect, useRef } from "react";
import skillData from "../data/skillData.json"; // Adjust if path differs
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaSass,
  FaNodeJs,
  FaCloud,
  FaDocker 
} from "react-icons/fa";
import { SiMongodb, SiExpress, SiMysql } from "react-icons/si";

const iconMap = {
  FaHtml5: <FaHtml5 />,
  FaCss3Alt: <FaCss3Alt />,
  FaJs: <FaJs />,
  FaReact: <FaReact />,
  FaSass: <FaSass />,
  FaNodeJs: <FaNodeJs />,
  FaCloud: <FaCloud />,
  SiMongodb: <SiMongodb />,
  SiExpress: <SiExpress />,
  SiMysql: <SiMysql />,
   FaDocker:<FaDocker />,

};

const Skills = () => {
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

  return (
    <div id="skills">
      <h1 className="reveal-left">
        <span id="letter">T</span>echnologies I <span id="letter">W</span>orked On
      </h1>

      <div className="skills-grid">
        {skillData.map((skill, index) => (
          <div
            key={index}
            className={`skill-card ${skill.color} reveal-right`}
            ref={(el) => (cardRefs.current[index] = el)}
          >
            <div className="skill-icon">{iconMap[skill.icon]}</div>
            <div className="skill-name">{skill.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
