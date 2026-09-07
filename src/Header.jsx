import React from 'react';
import Logo from './Logo';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import "./Header.css";

const  Header = () =>  {
    // state management
    const [isOpen, setIsOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    


    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }


        //check for user login
        // useEffect(() => {
        //     setIsLoggedIn(true)
        // }, [])

    return(
        <>
            <header className="header">
                <div className="header-container">
                    {/* Logo */}
                   <Logo logo="JOBI" name="CBT EXAM"/>

                    {/* Desktop Navigation Links */}
                    <nav className="desktop-nav">
                       <Link to="/" ><a href="">Home</a></Link>
                        <a href="#about">About</a>
                        <a href="#services">Services</a>
                        <a href="#contact">Contact</a>
                    </nav>

                    {/* Hamburger Icon for Mobile */}
                    <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
                    <span className={`bar ${isOpen ? "open" : ""}`}></span>
                    <span className={`bar ${isOpen ? "open" : ""}`}></span>
                    <span className={`bar ${isOpen ? "open" : ""}`}></span>
                    </button>

                     <div className="btn">
                            <Link to='/register'><a href="" className="btn">Register</a></Link>

                    </div>


                </div>

                {/* Mobile Navigation Dropdown */}
                <nav className={`mobile-nav ${isOpen ? "active" : ""}`}>
                    <a href="#home" onClick={toggleMenu}>Home</a>
                    <a href="#about" onClick={toggleMenu}>About</a>
                    <a href="#services" onClick={toggleMenu}>Services</a>
                    <a href="#contact" onClick={toggleMenu}>Contact</a>
                </nav>
                
            </header>
        </>
    );
    
};
export default Header;