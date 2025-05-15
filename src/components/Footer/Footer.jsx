import "./Footer.css";
import logo from "../../assets/logo.png";
import {
  FaBehance,
  FaLinkedin,
  FaShoppingCart,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";

export default function Footer() {
  return (
    <header className="footer-header">
      <div className="footer-container">
        <div className="footer-header-content">
          <div className="footer-brand-section">
            <div className="footer-logo-container">
              <img src={logo} alt="plm logo" className="footer-logo" />
            </div>
            <p className="footer-tagline">
              Sexuality educator and reproductive health advocate with over a
              decade of experience.
            </p>

            <div className="footer-social-icons">
              <a
                href="https://www.linkedin.c"
                target="_blank"
                aria-label="LinkedIn"
                className="footer-social-icon"
              >
                <FaLinkedin size={20} />
              </a>

              <a
                href="https://selar.com"
                target="_blank"
                aria-label="Selar"
                className="footer-social-icon"
              >
                <FaShoppingCart size={20} />
              </a>

              <a
                href="https://www.instagram."
                target="_blank"
                aria-label="Instagram"
                className="footer-social-icon"
              >
                <FaInstagram size={20} />
              </a>

              <a
                href="https://www.facebook."
                target="_blank"
                aria-label="Facebook"
                className="footer-social-icon"
              >
                <FaFacebook size={20} />
              </a>
            </div>
          </div>

          <div className="footer-nav-columns">
            <div className="footer-nav-column">
              <h2 className="footer-column-title">Explore</h2>
              <nav className="footer-nav-links">
                <a href="/about" className="footer-nav-link">
                  About
                </a>
                <a href="/services" className="footer-nav-link">
                  Work with me
                </a>
                <a
                  href="https://wa.me/"
                  target="_blank"
                  className="footer-nav-link"
                >
                  Coaching
                </a>
                <a
                  href="https://www.selar.com/"
                  target="_blank"
                  className="footer-nav-link"
                >
                  Courses
                </a>
              </nav>
            </div>

            <div className="footer-nav-column">
              <h2 className="footer-column-title">Resources</h2>
              <nav className="footer-nav-links">
                <a
                  href="https://selar"
                  target="_blank"
                  className="footer-nav-link"
                >
                  Shop
                </a>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  className="footer-nav-link"
                >
                  Webinars
                </a>
                <a
                  href="https://www.behance"
                  target="_blank"
                  className="footer-nav-link"
                >
                  Events
                </a>
                <a
                  href="https://docs.google.com"
                  target="_blank"
                  className="footer-nav-link"
                >
                  Enquiry Form
                </a>
                <a href="/blog" className="footer-nav-link">
                  Blog
                </a>
              </nav>
            </div>

            <div className="footer-nav-column">
              <h2 className="footer-column-title">Information</h2>
              <nav className="footer-nav-links">
                <a href="#" className="footer-nav-link">
                  Terms & Conditions
                </a>
                <a href="https://" target="_blank" className="footer-nav-link">
                  Website Design
                </a>
                <a href="https://" target="_blank" className="footer-nav-link">
                  Web Photography
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-bottom-links">
          <p>© 2025, Oluwapelumi Alesinloye-King.</p>
        </div>
      </div>
    </header>
  );
}
