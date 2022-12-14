import React from "react";
import "./AboutMe.css";
import me from "../../../Assets/images/me-about-2.jpg";
import { FaAward } from "react-icons/fa";
import { GiArtificialHive } from "react-icons/gi";
import { VscFolderLibrary } from "react-icons/vsc";

const AboutMe = () => {
  return (
    <div id="aboutme" className="about-me-container container">
      <h1 className="mt-5">About Me</h1>
      <div className="container about-me-inner-container">
        <div className="about-me-img-container">
          <div className="about-me-img img-fluid">
            <img src={me} alt="" />
          </div>
        </div>
        <div className="about-me-content">
          <div className="about-me-cards">
            <article className="about-ard">
              <FaAward className="about-icon" />

              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>

            <article className="about__card">
              <GiArtificialHive className="about-icon" />

              <h5>ML Projects</h5>
              <small>3+ Completed</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about-icon" />

              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>
          </div>
          <p>
            Keen to pursue a career in professional services with a focus on
            Software Development, Data Analysis and Security sectors. Have
            specialisation in frontend and backend Web Development.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
