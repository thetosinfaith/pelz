"use client"

import { useState } from "react"
import "./MiniNavbar.css"

function MiniNavbar() {
  const [miniIsOpen, setMiniIsOpen] = useState(false)

  const miniToggleMenu = () => {
    setMiniIsOpen(!miniIsOpen)
  }

  return (
    <nav className="mini-navbar">
      <div className="mini-hamburger" onClick={miniToggleMenu}>
        <div className={`mini-hamburger-line ${miniIsOpen ? "mini-open" : ""}`}></div>
        <div className={`mini-hamburger-line ${miniIsOpen ? "mini-open" : ""}`}></div>
        <div className={`mini-hamburger-line ${miniIsOpen ? "mini-open" : ""}`}></div>
      </div>
      <div className={`mini-menu ${miniIsOpen ? "mini-open" : ""}`}>
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default MiniNavbar
