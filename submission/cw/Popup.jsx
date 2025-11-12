import React from "react";
import "./App.css";

const Popup = ({ title, onClose }) => {
  return (
    <div className="popup-btn-container">
      <div className="Popinner">
        <h3>{title}</h3>
        <p>Increment occurs every time you click "Open Popup".</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Popup;
