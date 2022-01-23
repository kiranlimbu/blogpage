import { useState } from "react";

import "./contact-style.css";
import Modal from "../comment/Modal";

function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  // fetch action
  const onSubmit = (e) => {
    e.preventDefault();

    const newMessage = {
      name: name,
      email: email,
      subject: subject,
      message: message,
    };
    console.log(newMessage);
    setIsOpen(true);
  };

  // cancel action
  const cancelButton = () => {
    window.location.reload();
  };

  return (
    <div className="contact-container">
      <header className="contact-header">
        <h1>Send Message</h1>
        <h3 style={{ marginTop: "10px", color: "#555", letterSpacing: "2px" }}>
          Do you have any feedback? Let us know.
        </h3>
      </header>
      <div className="contact-wrapper">
        <form className="contact-form" onSubmit={onSubmit}>
          <div>
            <label>Name:</label>
            <input
              className="global-input"
              type="text"
              required
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              className="global-input"
              type="email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label>Subject:</label>
            <input
              className="global-input"
              type="text"
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>
          <div>
            <label>Message:</label>
            <textarea
              className="global-input"
              rows="8"
              required
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <div>
            <button className="contact-button" type="submit">
              Submit
            </button>
            <button
              className="contact-button"
              type="button"
              onClick={cancelButton}
            >
              Cancel
            </button>
          </div>
        </form>
        {isOpen && (
          <Modal CloseAction={() => setIsOpen(false)}>
            <h2 className="confirmation-modal">
              Your message was sent successfully!
            </h2>
          </Modal>
        )}
      </div>
    </div>
  );
}

export default ContactPage;
