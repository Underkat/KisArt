import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>navigation</h2>
            <Link to="/" className="foot-link">
              Home
            </Link>
            <Link to="/contact" className="foot-link">
              Contact me
            </Link>
            {/* <Link to="/" className="foot-link">
              Blog
            </Link> */}
          </div>
          <div className="footer-link-items">
            <h2>My art</h2>
            <Link to="/drawings" className="foot-link">
              Drawings
            </Link>
            <Link to="/pottery" className="foot-link">
              Pottery
            </Link>
            <Link to="/paintings" className="foot-link">
              Paintings
            </Link>
          </div>
          <div className="footer-link-items">
            <h2>Social Media</h2>
            <Link to="/" className="foot-link">
              Facebook
            </Link>
            <Link to="/" className="foot-link">
              Instagram
            </Link>
            <Link to="/" className="foot-link">
              LinkedIn
            </Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="social-icons">
            <div className="social-icon-link">
              <Link
                className="facebook"
                to="/"
                target="_blank"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook-f fa-2x" />
              </Link>
              <Link
                className="facebook"
                to="/"
                target="_blank"
                aria-label="Facebook"
              >
                <i className="fab fa-instagram" />
              </Link>
              <Link
                className="facebook"
                to="/"
                target="_blank"
                aria-label="Facebook"
              >
                <i className="fab fa-linkedin-in" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
