import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./ContactForm.css";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState({ show: false, message: "", type: "" });

  const showNotification = (message, type) => {
    setNotification({ show: true, message, type });
    setTimeout(() => {
      setNotification({ show: false, message: "", type: "" });
    }, 5000);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    // Constructing the custom message
    const message = `
      Contact Form\n
      Name: ${e.target.name.value}\n
      Subject: ${e.target.subject.value}\n
      Phone: ${e.target.phone.value}\n
      Email: ${e.target.email.value}\n
      Message: ${e.target.message.value}
    `;

    // Prepare the template parameters for EmailJS
    const templateParams = {
      form_name: e.target.name.value,
      from_email: e.target.email.value,
      phone_number: e.target.phone.value,
      message: message,
    };

    // Send the form data using emailjs.send
    emailjs
      .send(
        "service_1k8kxks",
        "template_yl15hwi",
        templateParams,
        "AipCVZOnpg1rh8xER"
      )
      .then(
        (result) => {
          console.log(result.text);
          setLoading(false);
          showNotification("Message sent successfully!", "success");
          e.target.reset(); // Reset the form after successful submission
        },
        (error) => {
          console.log(error.text);
          setLoading(false);
          showNotification("Failed to send the message. Please try again.", "error");
        }
      );
  };

  return (
    <div className="contact-form-container">
      {notification.show && (
        <div className={`notification ${notification.type}`}>
          {notification.message}
        </div>
      )}
      <form onSubmit={sendEmail}>
        <div className="row">
          <div className="col-md-6">
            <div className="form-grp">
              <input type="text" name="name" placeholder="Your Name" required />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-grp">
              <input type="email" name="email" placeholder="Email address" required />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-grp">
              <input type="text" name="phone" placeholder="Phone number" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-grp">
              <input type="text" name="subject" placeholder="Subject" required />
            </div>
          </div>
        </div>
        <div className="form-grp">
          <textarea name="message" placeholder="Write message" required></textarea>
        </div>
        
        <button type="submit" className="btn" disabled={loading}>
          {loading ? "Sending..." : "Send a message"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
