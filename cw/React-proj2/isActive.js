// src/isActive.js
export default function isActive() {
    const token = localStorage.getItem("token");
    return !!token; // true if logged in, false otherwise
  }
  
