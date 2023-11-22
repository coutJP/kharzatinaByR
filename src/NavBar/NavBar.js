// src/components/Navbar.js
import React from 'react';
import './NavBar.css';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Navbar = () => {
    const handleInstagramClick = () => {
        window.location.href = 'https://www.instagram.com/kharzatinabyr/';
      };
      const handleWhatsappClick = () => {
        window.open('https://wa.me/9613108087', '_blank');
      };
  return (
    
    <nav className="navbar">
      <div className="left">
        <h1>KharzatinaByR</h1>
      </div>
      <div className="right">
        <p>Contact Us:</p>
        <a className='bt'> <FaInstagram onClick={handleInstagramClick} /> </a>
      <a className='bt'>  <FaWhatsapp onClick={handleWhatsappClick} /> </a>
      </div>
    </nav>
  );
};
export default Navbar;
