import React from "react";
import "./Header.css";
import profilePhoto from "../../../Assets/images/me.png";

const Header = () => {
  return (
    <div className="header container">
      <div className="row gy-5">
        <div className="col-lg-6 col-md-12 col-sm-12 home-text">
          <p>Hello</p>
          <h2>I'm Inzamum-Ul-Haque</h2>
          <h3>I'm a Web Developer</h3>
          <div className="buttons">
            <a
              href="../../../Assets/resume/Inzamum Ul Haque - Jr. Web Developer.pdf"
              download
              className="btn-download outer-shadow hover-in-shadow"
            >
              Download Resume
            </a>
            <a
              href="Inzamum Ul Haque - Jr. Web Developer.pdf"
              download
              className="btn-download outer-shadow hover-in-shadow"
            >
              Contact Me
            </a>
          </div>
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12 home-img">
          <div className="img-box inner-shadow">
            <img
              className="outer-shadow"
              src={profilePhoto}
              alt="profile-pic"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
