import { useState, useEffect } from "react";
import "../mailList/mailList.css"; // Ensure the path is correct

const MailList = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  useEffect(() => {
    if (isSuccess) {
      const timer = setTimeout(() => setIsSuccess(false), 4000);
      return () => clearTimeout(timer);
    }
  }, [isSuccess]);

  const handleChange = (e) => {
    setEmail(e.target.value);
    if (error && validateEmail(e.target.value)) {
      setError("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500)); // Simulate API
      setIsSuccess(true);
      setEmail("");
    } catch {
      setError("An error occurred while subscribing. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mail">
      <h1 className="mailTitle">Subscribe to our Newsletter</h1>
      <p className="mailDesc">Stay updated with our latest content and offers.</p>

      <form onSubmit={handleSubmit} className="mailInputContainer" noValidate>
        <label htmlFor="emailInput" className="visuallyHidden">Email Address</label>
        <input
          id="emailInput"
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={handleChange}
          aria-describedby="emailError"
          className={error ? "inputError" : ""}
          required
        />
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Subscribing..." : "Subscribe"}
        </button>
      </form>

      {isSuccess && <p className="successMessage" role="alert">You've successfully subscribed!</p>}
      {error && <p id="emailError" className="errorMessage" role="alert">{error}</p>}
    </div>
  );
};

export default MailList;
