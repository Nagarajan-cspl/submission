import React from "react";
import './App.css';

const Forms = () => {
  return (
    <div className="Forms">
  <form >
    <h6>Username:</h6>
    <input type="text" name="username" required placeholder="Enter Username" />

    <h6>Email:</h6>
    <input type="email" name="email" required placeholder="Enter Email" />

    <div className="button-row">
      <button type="reset">Clear</button>
      <button type="submit">Submit</button>
    </div>
  </form>
  <div>
    <p></p>
  </div>
</div>

  );
};

export default Forms;
