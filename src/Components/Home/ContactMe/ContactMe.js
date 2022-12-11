import React from "react";
import { Card } from "react-bootstrap";
import "./ContactMe.css";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { MdSend } from "react-icons/md";
import { toast } from "react-hot-toast";

const ContactMe = () => {
  const handleSendMessage = (event) => {
    event.preventDefault();
    const form = event.target;
    toast.success("Thank you for contacting! I will be in touch with you.");
    form.reset();
  };

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
      <form onSubmit={handleSendMessage}>
        <div className="row row-cols-lg-2 row-cols-md-2 row-cols-sm-1 row-cols-1 mt-5 contact-form gx-lg-5 gx-md-5 gx-sm-0 gx-0">
          <div className="inputs p-0">
            <input type="text" name="name" placeholder="Your Name" />
            <input type="email" name="email" placeholder="Your Email" />
            <input type="text" name="subject" placeholder="Subject" />
          </div>
          <div className="message">
            <textarea name="message" placeholder="Type your message"></textarea>
          </div>
        </div>
        <button type="submit" className="send-btn outer-shadow hover-in-shadow">
          Send Message
          <MdSend />
        </button>
      </form>
    </div>
  );
};

export default ContactMe;
