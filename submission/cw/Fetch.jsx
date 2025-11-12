import React, { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import "./App.css";

function Fetch() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const { setIsLoggedIn } = useOutletContext(); 

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5031/api/Login/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) throw new Error("Login failed");

      const data = await response.json();
      console.log("Response data:", data);

      localStorage.setItem("token", data.token);

      setMessage("Login successful!");
      setIsLoggedIn(true); 
      navigate("/"); 
    } catch (error) {
      console.error("Error:", error);
      setMessage("Login failed. Please check your credentials.");
    }
  };

  return (
    <div className="Fetch" style={{ textAlign: "center", marginTop: "5rem" }}>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
        <button type="submit">Login</button>
      </form>
      <p style={{ color: message.includes("failed") ? "red" : "green" }}>
        {message}
      </p>
    </div>
  );
}

export default Fetch;
