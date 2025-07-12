import React,{useState} from 'react'
import Resume from "../../public/assets/Harshitha_Resume.pdf";
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaPhoneAlt,
  FaDownload,
} from "react-icons/fa";
import { BASE_URL } from "../apiConfig";


const Contact = () => {
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
          alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        const errorData = await res.json();
        // setStatus(`Failed: ${errorData.error || "Unknown error"}`);
        setPopupMessage(`Failed: ${errorData.error || "Unknown error"}`);
          alert(`Failed: ${errorData.error || "Unknown error"}`);
        setShowPopup(true);
        console.log("Message not sent!");
      }
    } catch (err) {
      console.error(err);
      setStatus("Error occurred...Please try again later.");
       alert("Error occurred... Please try again later.");
      setTimeout(() => setStatus(""), 3000);
    }
  };
  return (
    <>
         <div className="contact-container" id="contact">
          <h1 className="contact-heading reveal-left">
            Contact <span id="letter">M</span>e
          </h1>

          <div className="contact-content">
            {" "}
            {/* Flex Container for Side-by-Side */}
            <div className="contact-info reveal-right">
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

              <a
                href={Resume}
                download
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaDownload className="icon" /> Download Resume
              </a>
            </div>
            <form onSubmit={handleSubmit} className="contact-form reveal-right">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
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
                placeholder="Enter your email"
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
                placeholder="Enter your message"
                required
                className="form-input"
              />

              <button type="submit" className="submit-button">
                Send Message
              </button>
              <p>{status}</p>
              {/* {showPopup && (
                <div className="popup-overlay">
                  <div className="popup">
                    <p>{popupMessage}</p>
                    <button onClick={() => setShowPopup(false)}>OK</button>
                  </div>
                </div>
              )} */}
                {/* {showPopup && <Popup onClose={() => setShowPopup(false)} popupMessage={popupMessage} />} */}
            </form>
          </div>
        </div>
    </>
  )
}

export default Contact
