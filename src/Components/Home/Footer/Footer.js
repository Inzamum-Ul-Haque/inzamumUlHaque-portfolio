import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="waves">
        <div className="wave" id="wave1"></div>
        <div className="wave" id="wave2"></div>
        <div className="wave" id="wave3"></div>
        <div className="wave" id="wave4"></div>
      </div>
      <ul className="menu">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#aboutme">About</a>
        </li>
        <li>
          <a href="#education">Education</a>
        </li>
        <li>
          <a href="#certifications">Certification</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <p>© Inzamum-Ul-Haque Portfolio | All rights reserved</p>
    </footer>
  );
};

export default Footer;
