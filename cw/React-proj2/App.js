import React, { useState, useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/"); 
  };

  return (
    <div className="App">
      <nav className="navbar">
        <ul className="nav-links">
          {isLoggedIn && <li><Link to="/">Home</Link></li>}
          {isLoggedIn && <li><Link to="/about">About</Link></li>}
          {isLoggedIn && <li><Link to="/clock">Clock</Link></li>}
          {!isLoggedIn && <li><Link to="/login">Login</Link></li>}
          {isLoggedIn && (
            <li>
              <button className="logout-btn" onClick={handleLogout}>Logout</button>
            </li>
          )}
        </ul>
      </nav>

      <Outlet context={{ setIsLoggedIn }} />

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Welcome to React.js</p>
      </header>

    </div>
  );
}

export default App;


      /*
      import Popup from './Popup';
import Child from './Child';
        const [counter, setCounter] = useState(0);
  const [showPopup1, setShowPopup1] = useState(false);
  const [showPopup2, setShowPopup2] = useState(false);

  const handleOpenPopup1 = () => {
    setCounter(prev => prev + 1);
    setShowPopup1(true);
  };

  const handleOpenPopup2 = () => {
    setCounter(prev => prev + 1);
    setShowPopup2(true);
  };
      <button onClick={handleOpenPopup1}>Open Popup 1</button>
      {showPopup1 && (
        <Popup id="Popup"
          title={`Popup 1 Count: ${counter}`}
          onClose={() => setShowPopup1(false)}
        />
      )}

      <button onClick={handleOpenPopup2}>Open Popup 2</button>
      {showPopup2 && (
        <Popup
          title={`Popup 2 Count: ${counter}`}
          onClose={() => setShowPopup2(false)}
        />
      )}


      <Child
        counter={counter}
        onIncrement={() => setCounter(counter + 1)}
        onDecrement={() => setCounter(counter - 1)}
      />*/
