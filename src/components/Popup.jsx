// Popup.js
const Popup = ({ onClose,popupMessage }) => {
  return (
    <div className="project-overlay">
      <div>
        <p>{popupMessage}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Popup;
