import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            KIANA STANEK
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times fa-2x" : "fa fa-bars fa-2x"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="na-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="na-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                something
              </Link>
            </li>
            {!button && (
              <li className="na-item">
                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                  Contact
                </Link>
              </li>
            )}
          </ul>
          {button && <Button buttonStyle="btn--outline">Contact me</Button>}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
