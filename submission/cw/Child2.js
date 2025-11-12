import React from "react";

const Child2 = ({ formData }) => {
  if (!formData) return null;

  return (
    <div style={{ marginTop: "20px", border: "1px solid #ccc", padding: "10px" }}>
      <h3>Submitted Data</h3>
      {Object.keys(formData).map((key) => (
        <div key={key} style={{ marginBottom: "10px" }}>
          <label style={{ fontWeight: "bold" }}>{key}:</label>
          <input type="text" value={formData[key]} readOnly />
        </div>
      ))}
    </div>
  );
};

export default Child2;
