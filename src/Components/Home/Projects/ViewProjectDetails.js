import React from "react";
import { Button, Modal } from "react-bootstrap";
import { MdSend } from "react-icons/md";
import "./ViewProjectDetails.css";

const ViewProjectDetails = ({ projectData, show, setShow }) => {
  const handleClose = () => setShow(false);

  return (
    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>{projectData?.projectFullName}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <img className="img-fluid" src={projectData?.mainImg} alt="mainImg" />
        </div>
        <p className="mt-3">{projectData?.desc}</p>
        <p className="fw-semibold">Features include:</p>
        <ul className="features">
          {projectData?.features.map((feature, idx) => (
            <li key={idx}>
              <MdSend className="me-2" /> {feature}
            </li>
          ))}
        </ul>
        <p className="fw-semibold">Tech used:</p>
        <p>
          {/* <i className="devicon-html5-plain-wordmark colored"></i> */}
          {projectData?.technologies}
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ViewProjectDetails;
