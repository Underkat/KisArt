import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Dropdown from "./Dropdown";
import { Button } from "./Button";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

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
            {click && (
              <li className="na-item">
                <Link
                  to="/drawings"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Drawings
                </Link>
              </li>
            )}
            {click && (
              <li className="na-item">
                <Link
                  to="/pottery"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Pottery
                </Link>
              </li>
            )}
            {click && (
              <li className="na-item">
                <Link
                  to="/paintings"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Paintings
                </Link>
              </li>
            )}
            {!click && (
              <li
                className="na-item"
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
              >
                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                  My Art
                  <i className="fas fa-caret-down" />
                </Link>
                {dropdown && <Dropdown />}
              </li>
            )}
            {/* <li className="na-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Blog
              </Link>
            </li> */}
            <li className="na-item">
              <Link to="/contact" className="nav-links" onClick={closeMobileMenu}>
                Contact
              </Link>
            </li>
          </ul>
          {/* {button && <Button buttonStyle="btn--outline">Contact me</Button>} */}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
