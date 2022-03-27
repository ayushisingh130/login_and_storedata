import React from "react";
import "./Hero.css";

const Hero = ({ handleLogout }) => {
  return (
    <div className="hero">
      <div>
        <h3>Welcome</h3>
      </div>
      <div>
        <button className="logout_btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Hero;
