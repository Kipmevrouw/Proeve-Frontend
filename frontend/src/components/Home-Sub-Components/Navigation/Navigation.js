import './Navigation.css';
import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';

const Navigation = ({Logo}) => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 0) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
    return (
        <>
            <nav className={scrolled ? 'nav scrolled' : 'nav'}>
                <div className='nav-container'>
                    <div className='navDiv_Left'>
                        <img src={Logo} alt="TechCampusLogo" className='navLogo'></img>
                    </div>
                    <div className='navDiv_Right'>
                        <Link to="/login" style={{ textDecoration: 'none', color: 'white' }}>
                            <a className='nav_Login'>Inloggen</a>
                        </Link>
                        <Link to="/signup">
                            <button type="button" className='nav_Signup'>Schrijf je in!</button>
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navigation;