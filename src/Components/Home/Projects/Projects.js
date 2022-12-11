import React from "react";
import { Card } from "react-bootstrap";
import "./Projects.css";
import swapper from "../../../Assets/images/swapper.png";
import { BiLinkExternal } from "react-icons/bi";

const Projects = () => {
  return (
    <div className="projects container" id="projects">
      <h1>My Projects</h1>
      <div className="cards-container row row-cols-lg-3 row-cols-md-2 row-cols-sm-1 row-cols-1">
        <div className="cards col">
          <Card>
            <Card.Img variant="top" src={swapper} />
            <div className="links">
              <button>
                <a href="/">
                  Live Preview <BiLinkExternal />
                </a>
              </button>
            </div>
          </Card>
          <h3>Swapper</h3>
        </div>
        <div className="cards col">
          <Card>
            <Card.Img variant="top" src={swapper} />
            <div className="links">
              <button>
                <a href="/">
                  Live Preview <BiLinkExternal />
                </a>
              </button>
            </div>
          </Card>
          <h3>Photography</h3>
        </div>
        <div className="cards col">
          <Card>
            <Card.Img variant="top" src={swapper} />
            <div className="links">
              <button>
                <a href="/">
                  Live Preview <BiLinkExternal />
                </a>
              </button>
            </div>
          </Card>
          <h3>CodiePie</h3>
        </div>
      </div>
    </div>
  );
};

export default Projects;
