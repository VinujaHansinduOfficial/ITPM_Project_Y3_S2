import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./navbar.css";
import logo from '../../assets/images/logo.png'; // Update path to match your project structure

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleNavigation = (e, sectionId) => {
    e.preventDefault();

    const scrollToSection = () => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    };

    if (window.location.pathname === "/") {
      scrollToSection();
    } else {
      navigate("/");
      setTimeout(scrollToSection, 300);
    }

    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="TravelXpert Logo" className="logo-img" />
          <span className="logo-text"></span>
        </Link>

        <div className={`navbar-links ${menuOpen ? "active" : ""}`}>
          <Link to="/" className="nav-link" onClick={(e) => handleNavigation(e, "hero")}>
            Home
          </Link>
          <Link to="/destinations" className="nav-link">
            Destinations
          </Link>
          <Link to="/hotels" className="nav-link">
            Hotels
          </Link>
          <Link to="/bookings" className="nav-link">
            Bookings
          </Link>
          <Link to="/property-list" className="nav-link">
            Property List
          </Link>
          
          <div className="auth-buttons">
            <Link to="/login" className="nav-link login">
              Login
            </Link>
            <Link to="/register" className="nav-link register">
              Register
            </Link>
          </div>
        </div>

        <button 
          className="hamburger-menu" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span className="hamburger-bar"></span>
          <span className="hamburger-bar"></span>
          <span className="hamburger-bar"></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;