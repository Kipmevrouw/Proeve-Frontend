import "./Navigation.css";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

const Navigation = ({ Logo }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <nav className={scrolled ? "nav scrolled" : "nav"}>
        <div className="nav-container">
          <div className="navDiv_Left">
            <Link to="/">
            <img src={Logo} alt="TechCampusLogo" className="navLogo"></img>
            </Link>
          </div>
          <div className="navDiv_Right">
            <Link
              to="/login"
              style={{ textDecoration: "none", color: "white" }}
            >
              <a className="nav_Login">Inloggen</a>
            </Link>
            <Link to="/signup">
              <button type="button" className="nav_Signup">
                Schrijf je in!
              </button>
            </Link>
          </div>
        </div>
        <div>
        <Link to="/">
          <img
            src={Logo}
            alt="TechCampusLogo"
            className="navHamburgerLogo"
          ></img>
          </Link>
          <div className="hamburger-menu">
            <div
              className={`menu-btn ${isOpen ? "open" : ""}`}
              onClick={toggleMenu}
            >
              {isOpen ? (
                <div className="menu-btn__cross"></div>
              ) : (
                <div className="menu-btn__burger"></div>
              )}
            </div>
            <ul className={`menu-items ${isOpen ? "open" : ""}`}>
              <div>
              </div>
              <div className="menu-items-li">
                <a href="https://techcheck.nl/" className="Hamburger-a"><li className="Hamburger-li">Doe de test</li></a>
                <a href="https://jet-net.nl/voortgezet-onderwijs/techniek-klas-halen/7-werelden-van-techniek/" className="Hamburger-a"><li className="Hamburger-li">Ontdek de 7 werelden</li></a>
              </div>
              <div className="menu-items-div">
                <Link
                  to="/login"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <a className="nav_Login">Inloggen</a>
                </Link>
                <Link to="/signup">
                  <button type="button" className="nav_Signup">
                    Schrijf je in!
                  </button>
                </Link>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
