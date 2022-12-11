import React from "react";
import "./Header.css";
import profilePhoto from "../../../Assets/images/me.png";

const Header = () => {
  return (
    <div className="header container" id="home">
      <div className="hero-shape">
        <img
          className="hero-shape-1"
          src="https://bdevs.net/wp/educal/wp-content/themes/educal/assets/img/shape/hero/hero-1-circle.png"
          alt="hero-shape-1"
        />
        <img
          className="hero-shape-2"
          src="https://bdevs.net/wp/educal/wp-content/themes/educal/assets/img/shape/hero/hero-1-circle-2.png"
          alt="hero-shape-2"
        />
        <img
          className="hero-shape-3"
          src="https://bdevs.net/wp/educal/wp-content/themes/educal/assets/img/shape/hero/hero-1-dot-2.png"
          alt="hero-shape-3"
        />
      </div>
      <div className="row gy-5 header-container">
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
            <div className="hero-shape">
              <img
                className="hero-shape-6"
                src="https://bdevs.net/wp/educal/wp-content/themes/educal/assets/img/shape/hero/hero-1-dot.png"
                alt="hero-shape-6"
              />
              <img
                className="hero-shape-4"
                src="https://bdevs.net/wp/educal/wp-content/themes/educal/assets/img/shape/hero/hero-1-circle-3.png"
                alt="hero-shape-4"
              />
              <img
                className="hero-shape-5"
                src="https://bdevs.net/wp/educal/wp-content/themes/educal/assets/img/shape/hero/hero-1-circle-4.png"
                alt="hero-shape-5"
              />
            </div>
            <img
              className="outer-shadow profile-pic"
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
