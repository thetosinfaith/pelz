import React, { useState } from "react";
import { Sling as Hamburger } from "hamburger-react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { FaArrowRight } from "react-icons/fa6";
import "./Header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        <NavLink to="/">
          <img src={Logo} alt="Logo" className="h-logo" />
        </NavLink>
        <div className={`nav-container ${isOpen ? "open" : ""}`}>
          <ul className="nav-links">
            <li>
              <NavLink to="/about">ABOUT</NavLink>
            </li>
            <li>
              <NavLink to="/services">
              SERVICES</NavLink>
            </li>
            <li>
              <NavLink to="/blog">SEX-PERT BLOG</NavLink>
            </li>
            <li>
              <NavLink to="/books">BOOKS</NavLink>
            </li>
          
          </ul>

          <button className="say-hello">
            <a
              href="https://api.whatsap"
              target="_blank"
              rel="noopener noreferrer"
            >
              LET'S WORK <FaArrowRight />
            </a>
          </button>
        </div>

        <div className="hamburger">
          <Hamburger toggled={isOpen} toggle={setIsOpen} size={42} />
        </div>
      </nav>
    </>
  );
};

export default Header;
