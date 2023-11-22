// src/components/Navbar.js
import React from 'react';
import './NavBar.css';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import logo from './logo.png'
import { GiDreamCatcher } from "react-icons/gi";

const Navbar = () => {
    const handleInstagramClick = () => {
        window.location.href = 'https://www.instagram.com/kharzatinabyr/';
      };
      const handleWhatsappClick = () => {
        window.open('https://wa.me/9613108087', '_blank');
      };
      const logoclick = () => {
        window.location.href = '/';
      };
  return (
    
    <nav className="navbar">
      <div className="left">
        <h1 style={{cursor:'pointer',fontFamily: 'Aguafina Script',fontSize: '22px'}} onClick={logoclick}><GiDreamCatcher style={{fontSize:'40px'}}/> KharzatinaByR</h1>
      </div>
      {/* <div className="middle">
        <img src={logo} alt="Logo" style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
      </div> */}
      <div className="right">
        <p>Contact Us:</p>
        <a className='bt'> <FaInstagram onClick={handleInstagramClick} /> </a>
      <a className='bt'>  <FaWhatsapp onClick={handleWhatsappClick} /> </a>
      </div>
    </nav>
  );
};
export default Navbar;
