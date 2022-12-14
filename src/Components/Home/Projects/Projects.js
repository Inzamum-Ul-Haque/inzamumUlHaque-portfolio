import React, { useState } from "react";
import "./Projects.css";
import swapper from "../../../Assets/images/swapper.png";
import photography from "../../../Assets/images/photography.png";
import codiepie from "../../../Assets/images/codiepie.png";
import { BiLinkExternal, BiLinkAlt } from "react-icons/bi";
import { Card } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { BsServer } from "react-icons/bs";
import ViewProjectDetails from "./ViewProjectDetails";

const Projects = () => {
  const [show, setShow] = useState(false);
  const [projectData, setProjectData] = useState(null);
  const projectsData = [
    {
      id: 1,
      name: "Swapper",
      projectFullName: "Swapper: Buy Second-hand Laptops from Sellers",
      mainImg: swapper,
      screenshots: [swapper, swapper, swapper],
      desc: "Swapper is a laptop reselling website for used laptops. A normal user or buyer can buy any of the used laptops posted by the seller. There is also an admin system where admins can verify buyers or sellers and delete some reported items.",
      features: [
        "Login registration system using Google and secure JWT API for buyers, sellers, and admins",
        "Product posting, advertisement system by sellers where on the home page the seller’s products will be advertised",
        "Buyers can view and book a product, and buyers can also save their desired products into their wishlist",
        "Admin can verify buyers and sellers, delete added or reported products by the sellers",
        "Users can pay online using their card or by meeting sellers and paying them directly",
        "Routes are protected by JWT tokens, unauthorized intervention of data can’t be possible",
        "Card payment system is implemented by Stripe",
      ],
      technologies:
        "React, React-Router, Firebase Auth, JWT, Node, Express, Rest API, Stripe",
      liveLink: "https://products-resale-a767c.web.app/",
      clientLink:
        "client-side link: https://github.com/Inzamum-Ul-Haque/Swapper",
      serverLink: "https://github.com/Inzamum-Ul-Haque/swapper-server",
    },
    {
      id: 2,
      name: "Photography",
      projectFullName: "Swapper: Buy Second-hand Laptops from Sellers",
      mainImg: photography,
      screenshots: [swapper, swapper, swapper],
      desc: "Photography is a service providing website for providing photography services. People can get any kind of photography services offered by the photographers by knocking on them.",
      features: [
        "Login registration system using Google and secure JWT API for buyers, sellers, and admins",
        "Product posting, advertisement system by sellers where on the home page the seller’s products will be advertised",
        "Buyers can view and book a product, and buyers can also save their desired products into their wishlist",
        "Admin can verify buyers and sellers, delete added or reported products by the sellers",
        "Users can pay online using their card or by meeting sellers and paying them directly",
        "Routes are protected by JWT tokens, unauthorized intervention of data can’t be possible",
        "Card payment system is implemented by Stripe",
      ],
      technologies:
        "React, React-Router, Firebase Auth, JWT, Node, Express, Rest API, Stripe",
      liveLink: "https://products-resale-a767c.web.app/",
      clientLink:
        "client-side link: https://github.com/Inzamum-Ul-Haque/Swapper",
      serverLink: "https://github.com/Inzamum-Ul-Haque/swapper-server",
    },
    {
      id: 3,
      name: "CodiePie",
      projectFullName: "Swapper: Buy Second-hand Laptops from Sellers",
      mainImg: codiepie,
      screenshots: [swapper, swapper, swapper],
      desc: "CodiePie is an educational platform for every enthusiastic person who wants to learn web development. It is a website where they can buy courses regarding web development. Here they will find most of the courses related to web development.",
      features: [
        "Login registration system using Google and secure JWT API for buyers, sellers, and admins",
        "Product posting, advertisement system by sellers where on the home page the seller’s products will be advertised",
        "Buyers can view and book a product, and buyers can also save their desired products into their wishlist",
        "Admin can verify buyers and sellers, delete added or reported products by the sellers",
        "Users can pay online using their card or by meeting sellers and paying them directly",
        "Routes are protected by JWT tokens, unauthorized intervention of data can’t be possible",
        "Card payment system is implemented by Stripe",
      ],
      technologies:
        "React, React-Router, Firebase Auth, JWT, Node, Express, Rest API, Stripe",
      liveLink: "https://products-resale-a767c.web.app/",
      clientLink:
        "client-side link: https://github.com/Inzamum-Ul-Haque/Swapper",
      serverLink: "https://github.com/Inzamum-Ul-Haque/swapper-server",
    },
  ];

  const handleShow = (data) => {
    setShow(true);
    setProjectData(data);
  };

  return (
    <div className="projects container" id="projects">
      <h1>My Projects</h1>
      <div className="projects-container row row-cols-lg-3 row-cols-md-2 row-cols-sm-1 row-cols-1 mt-4">
        {projectsData.map((projectData, idx) => (
          <Card className="h-100 d-flex" key={idx}>
            <Card.Img className="mb-3" src={projectData.mainImg} />
            <Card.Body>
              <Card.Title className="mb-2">{projectData.name}</Card.Title>
              <Card.Text>
                {projectData.desc.length > 200
                  ? projectData.desc.slice(0, 150) + " ...."
                  : projectData.desc}
                {projectData.desc.length > 200 ? (
                  <a className="see-more" href="/">
                    See more
                  </a>
                ) : (
                  ""
                )}
              </Card.Text>
              <div className="d-flex justify-content-between align-items-center mb-3">
                <button
                  onClick={() => handleShow(projectData)}
                  className="view-details"
                >
                  View Details <BiLinkExternal />
                </button>
                <div className="d-flex justify-content-between align-items-center links">
                  <a
                    href={projectData.liveLink}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <BiLinkAlt className="me-3" />
                  </a>
                  <a
                    href={projectData.clientLink}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <AiFillGithub className="me-3" />
                  </a>
                  <a
                    href={projectData.serverLink}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <BsServer />
                  </a>
                </div>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>
      <ViewProjectDetails
        projectData={projectData}
        show={show}
        setShow={setShow}
      />
    </div>
  );
};

export default Projects;
