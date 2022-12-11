import React from "react";
import { Card } from "react-bootstrap";
import "./ContactMe.css";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { GoLocation } from "react-icons/go";

const ContactMe = () => {
  return (
    <div className="contact container" id="contact">
      <h1>Contact Me</h1>
      <div className="address-cards row row-cols-lg-3 row-cols-md-2 row-cols-sm-1 row-cols-1 mt-4">
        <Card>
          <Card.Body>
            <Card.Title>
              <BsFillTelephoneFill />
            </Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Phone</Card.Subtitle>
            <Card.Text>+8801750414709</Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>
              <AiOutlineMail />
            </Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Email</Card.Subtitle>
            <Card.Text>inzamum.inu@gmail.com</Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>
              <GoLocation />
            </Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Address</Card.Subtitle>
            <Card.Text>Mirpur 11, Dhaka-1216</Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div className="row row-cols-lg-2 row-cols-md-2 row-cols-sm-1 row-cols-1 mt-5 contact-form gx-lg-5 gx-md-5 gx-sm-0 gx-0">
        <div className="inputs p-0">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <input type="text" placeholder="Subject" />
        </div>
        <div className="message">
          <textarea placeholder="Type your message"></textarea>
        </div>
      </div>
      <button className="send-btn outer-shadow hover-in-shadow">Send</button>
    </div>
  );
};

export default ContactMe;
