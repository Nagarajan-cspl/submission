import React, { useState } from "react";

function MyForm({ children, onSubmit }) {
  return <form onSubmit={onSubmit}>{children}</form>;
}

MyForm.Input = function Input({ value, onChange }) {
  return (
    <input
      id="name-input"
      placeholder="Enter the Name"
      value={value}
      onChange={onChange}
    />
  );
};

MyForm.Button = function Button() {
  return <button type="submit">Send</button>;
};

function Form() {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); 
    alert(`Submitted name: ${name}`);
    setName(""); 
  };

  return (
    <div className="forms">
      <h2>Custom Form Example</h2>
      <MyForm onSubmit={handleSubmit}>
        <MyForm.Input value={name} onChange={(e) => setName(e.target.value)} />
        <MyForm.Button />
      </MyForm>
    </div>
  );
}

export default Form;
