import React from "react";
import "./AboutMe.css";
import me from "../../../Assets/images/me-about-2.jpg";
import { FaAward } from "react-icons/fa";
import { GiArtificialHive } from "react-icons/gi";
import { VscFolderLibrary } from "react-icons/vsc";

const AboutMe = () => {
  return (
    <div id="aboutme" className="about-me-container container">
      <div className="title-header">
        <h1 className="mt-5">About Me</h1>
      </div>
      <div className="hero-container-2 mt-5">
        <img
          className="hero-shape-2"
          src="https://bdevs.net/wp/educal/wp-content/themes/educal/assets/img/shape/hero/hero-1-circle-2.png"
          alt="hero-shape-2"
        />
        <img
          className="hero-shape-6"
          src="https://bdevs.net/wp/educal/wp-content/themes/educal/assets/img/shape/hero/hero-1-dot.png"
          alt="hero-shape-6"
        />
        <img
          className="hero-shape-3"
          src="https://bdevs.net/wp/educal/wp-content/themes/educal/assets/img/shape/hero/hero-1-dot-2.png"
          alt="hero-shape-3"
        />
      </div>
      <div className="container about-me-inner-container">
        <div className="about-me-img-container">
          <div className="about-me-img img-fluid">
            <img src={me} alt="" />
          </div>
        </div>
        <div className="about-me-content">
          <div className="about-me-cards">
            <article className="about-card">
              <FaAward className="about-icon" />
              <h5>Experience</h5>
              <small>2+ Years Working</small>
            </article>

            <article className="about-card">
              <GiArtificialHive className="about-icon" />
              <h5>ML Projects</h5>
              <small>3+ Completed</small>
            </article>

            <article className="about-card">
              <VscFolderLibrary className="about-icon" />
              <h5>Projects</h5>
              <small>11+ Completed</small>
            </article>
          </div>
          <p className="mt-4">
            I am Inzamum-Ul-Haque, a passionate software engineer with lots of
            hope and inspiration to do something interesting in life. I
            specialize in web development and love coding and building
            interactive full-stack websites. I find myself enthusiastic,
            proactive, and a self-driven learner who wants to learn new things
            and technologies to keep pace with the IT industry. <br />
            <br /> 🎯 Currently, I am developing myself to be a full-stack
            junior developer and shaping up my skills in different stacks. I
            love taking inspiration from people who motivate others. I enjoy
            working in teams and try to learn the best that I can from others.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
