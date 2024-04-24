import React, { useState } from 'react';
import './HamburgerMenu.css';

const HamburgerMenu = ({Logo}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    <img src={Logo} alt="TechCampusLogo" className='navHamburgerLogo'></img>
    <div className="hamburger-menu">
        <div className={`menu-btn ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
            {isOpen ? (
            <div className="menu-btn__cross"></div>
            ) : (
            <div className="menu-btn__burger"></div>
            )}
        </div>
        <ul className={`menu-items ${isOpen ? 'open' : ''}`}>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
        </ul>
    </div>
    </>
  );
};

export default HamburgerMenu;
