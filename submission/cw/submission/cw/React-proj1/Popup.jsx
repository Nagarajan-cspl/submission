import React from "react";
import "./App.css";

const Popup = ({ title, onClose }) => {
  return (
    <div className="Popupbox">
      <div className="Popinner">
        <h3>{title}</h3>
        <p className="popup-text">Increment occurs every time you click "Open Popup".</p>
        <button className="btn close-btn" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Popup;
