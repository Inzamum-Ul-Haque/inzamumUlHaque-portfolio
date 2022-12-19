import React from "react";
import "./Skills.css";
import netlify from "../../../Assets/images/netlify-svgrepo-com.svg";
import vercel from "../../../Assets/images/vercel-logo-svgrepo-com.svg";
import reactNative from "../../../Assets/images/react-1-logo-svgrepo-com.svg";
import jwt from "../../../Assets/images/jsonwebtokens-svgrepo-com.svg";

const Skills = () => {
  return (
    <div className="skills-container container" id="skills">
      <div className="title-header">
        <h1>Skills</h1>
      </div>
      <div className="mt-4">
        <h4>Expertise</h4>
        <div className="skill-box d-flex flex-wrap justify-content-center align-items-center mt-2">
          <div className="skill-title">
            <div className="img">
              <img
                className="skill-icon"
                alt=""
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg"
              />
            </div>
            <h3>HTML5</h3>
          </div>
          <div className="skill-title">
            <div className="img">
              <img
                alt=""
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg"
              />
            </div>
            <h3>CSS3</h3>
          </div>
          <div className="skill-title">
            <div className="img">
              <img
                alt=""
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
              />
            </div>
            <h3>Javascript</h3>
          </div>
          <div className="skill-title">
            <div className="img">
              <img
                alt=""
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
              />
            </div>
            <h3>React</h3>
          </div>
          <div className="skill-title">
            <div className="img">
              <img
                alt=""
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
              />
            </div>
            <h3>Tailwind</h3>
          </div>
          <div className="skill-title">
            <div className="img">
              <img
                alt=""
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
              />
            </div>
            <h3>Bootstrap</h3>
          </div>
          <div className="skill-title">
            <div className="img">
              <img
                alt=""
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg"
              />
            </div>
            <h3>C</h3>
          </div>
          <div className="skill-title">
            <div className="img">
              <img
                alt=""
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
              />
            </div>
            <h3>C++</h3>
          </div>
          <div className="skill-title">
            <div className="img">
              <img
                alt=""
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
              />
            </div>
            <h3>Java</h3>
          </div>
        </div>
      </div>
      <div className="mt-2">
        <h4>Comfortable</h4>
        <div className="skill-box d-flex flex-wrap justify-content-center align-items-center mt-2">
          <div className="skill-title">
            <div className="img">
              <img
                alt=""
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"
              />
            </div>
            <h3>Node</h3>
          </div>
          <div className="skill-title">
            <div className="img">
              <img
                alt=""
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg"
              />
            </div>
            <h3>Express</h3>
          </div>
          <div className="skill-title">
            <div className="img">
              <img
                alt=""
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
              />
            </div>
            <h3>MongoDB</h3>
          </div>
          <div className="skill-title">
            <div className="img">
              <img
                alt=""
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain-wordmark.svg"
              />
            </div>
            <h3>Firebase</h3>
          </div>
          <div className="skill-title">
            <div className="img">
              <img alt="" src={jwt} />
            </div>
            <h3>JWT</h3>
          </div>
          <div className="skill-title">
            <div className="img">
              <img
                alt=""
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg"
              />
            </div>
            <h3>NPM</h3>
          </div>
        </div>
      </div>
      <div className="mt-2">
        <h4>Familiar</h4>
        <div className="skill-box d-flex flex-wrap justify-content-center align-items-center mt-2">
          <div className="skill-title">
            <div className="img">
              <img
                alt=""
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg"
              />
            </div>
            <h3>MySQL</h3>
          </div>

          <div className="skill-title">
            <div className="img">
              <img
                alt=""
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
              />
            </div>
            <h3>SASS</h3>
          </div>
          <div className="skill-title">
            <div className="img">
              <img
                alt=""
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
              />
            </div>
            <h3>TypeScript</h3>
          </div>
          <div className="skill-title">
            <div className="img">
              <img
                alt=""
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
              />
            </div>
            <h3>Redux</h3>
          </div>
          <div className="skill-title">
            <div className="img">
              <img
                alt=""
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
              />
            </div>
            <h3>Next</h3>
          </div>
          <div className="skill-title">
            <div className="img">
              <img alt="" src={reactNative} />
            </div>
            <h3>React Native</h3>
          </div>
          <div className="skill-title">
            <div className="img">
              <img
                alt=""
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg"
              />
            </div>
            <h3>Jquery</h3>
          </div>
        </div>
      </div>
      <div className="mt-2">
        <h4>Tools</h4>
        <div className="skill-box d-flex flex-wrap justify-content-center align-items-center mt-2">
          <div className="skill-title">
            <div className="img">
              <img
                alt=""
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
              />
            </div>
            <h3>VS Code</h3>
          </div>
          <div className="skill-title">
            <div className="img">
              <img
                alt=""
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg"
              />
            </div>
            <h3>MS Visual Studio</h3>
          </div>
          <div className="skill-title">
            <div className="img">
              <img alt="" src={netlify} />
            </div>
            <h3>Netlify</h3>
          </div>
          <div className="skill-title">
            <div className="img">
              <img alt="" src={vercel} />
            </div>
            <h3>Vercel</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
