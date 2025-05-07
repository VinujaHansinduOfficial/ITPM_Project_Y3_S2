import React, { useState } from "react";
import "./subscribeFooterSection.css"; // Make sure to add the CSS file

const SubscribeFooterSection = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Regular expression to validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      setError("Please enter your email.");
    } else if (!emailRegex.test(email)) {
      setError("Please enter a valid email format.");
    } else {
      setError("");
      alert("Thank you for subscribing!");
      setEmail(""); // Clear the input field after successful submission
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (error) setError(""); // Clear error message when user starts typing
  };

  return (
    <section className="subscribeFooterSection">
      <div className="subscribeContainer">
        
        <div className="socialLinks">
          <div className="socialIcons">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="socialIcon"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="socialIcon"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="socialIcon"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscribeFooterSection;