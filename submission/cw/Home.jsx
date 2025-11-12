import React from "react";
import isActive from "./isActive";

function Home() {
  const loggedIn = isActive();

  return (
    <div style={{ textAlign: "center", marginTop: "3rem" }}>
      {loggedIn ? (
        <>
          <h2>Welcome to your Bank Portal</h2>
          <p>You are now logged in!</p>
        </>
      ) : (
        <>
          <h2>Welcome to the Bank Portal</h2>
          <p>Please log in to access your account information.</p>
        </>
      )}
    </div>
  );
}

export default Home;
