// src/components/Navbar.js
import React from 'react';
import './NavBar.css';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import logo from './logo.png'
import { GiDreamCatcher } from "react-icons/gi";
import hat from '../Cards/santaHat.png'
import santa from '../Cards/santa.png'
const Navbar = () => {
    const handleInstagramClick = () => {
        window.location.href = 'https://www.instagram.com/kharzatinabyr/';
      };
      const handleWhatsappClick = () => {
        window.open('https://wa.me/9613108087', '_blank');
      };
      const logoclick = () => {
        window.location.href = 'https://coutjp.github.io/kharzatinaByR/';
      };
  return (
    
    <nav className="navbar">
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between',position:'relative' }}>
  <div className="left">
    <h1 style={{ cursor: 'pointer', fontFamily: 'Aguafina Script', fontSize: '22px' }} onClick={logoclick}>
      <GiDreamCatcher style={{ fontSize: '40px' }} /> KharzatinaByR
    </h1>
  </div>
  <img src={hat} alt="Your Alt Text" style={{ width: '30px', height: '30px', objectFit: 'cover',position:'absolute',top:'-10px',right:'-21px', transform: 'rotate(45deg)', }} />
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
