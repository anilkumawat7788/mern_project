import React, { useState, useEffect } from "react";
// import { Button } from './Button';
import { Link } from "react-router-dom";
// import logo1 from '../../images/logo1.png'
import "./header1.css";

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
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          {/* <img className="logo_img" src={logo1} alt=""/> */}
          <h1>Logo</h1>
            
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links " onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
           <hr className="line3" />
            <li className="nav-item">
              <Link to="/profile"  className="nav-links" onClick={closeMobileMenu}>
              Profile
              </Link>
            </li>
            <hr className="line3" />
            <li className="nav-item">
              <Link to="/destination"  className="nav-links" onClick={closeMobileMenu}>
              Destination
              </Link>
            </li>
            <hr className="line3" />
            <li className="nav-item">
              <Link to="/summary"  className="nav-links" onClick={closeMobileMenu}>
              Summary
              </Link>
            </li>
            <hr className="line3" />
            <li className="nav-item">
              <Link to="/signup" className="nav-links" onClick={closeMobileMenu}>
                SignUp
              </Link>
            </li>
            <hr className="line3" />
            <li className="nav-item">
              <Link
                to="/login"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Login
              </Link>
            </li>
          </ul>
          {/* {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>} */}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
