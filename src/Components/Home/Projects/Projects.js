import React from "react";
import { Card } from "react-bootstrap";
import "./Projects.css";
import swapper from "../../../Assets/images/swapper.png";
import { BiLinkExternal } from "react-icons/bi";

const Projects = () => {
  return (
    <div className="mt-5 projects container">
      <h1>My Projects</h1>
      <div className="cards-container row row-cols-3">
        <div className="cards col">
          <Card>
            <Card.Img variant="top" src={swapper} />
            <div className="links">
              <button>
                <a href="/">
                  Live Preview <BiLinkExternal />
                </a>
              </button>
              <button>
                <a href="/">
                  Github Client <BiLinkExternal />
                </a>
              </button>
              <button>
                <a href="/">
                  Github Server <BiLinkExternal />
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
              <button>
                <a href="/">
                  Github Client <BiLinkExternal />
                </a>
              </button>
              <button>
                <a href="/">
                  Github Server <BiLinkExternal />
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
              <button>
                <a href="/">
                  Github Client <BiLinkExternal />
                </a>
              </button>
              <button>
                <a href="/">
                  Github Server <BiLinkExternal />
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
