import React from 'react';
import './footer.css';
import gpt3Logo from '../../assets/logo.svg';

const Footer = () => {
  return (
    <div className='gpt3__footer section__padding'>
      <div className='gpt3__footer-heading'>
        <h1 className='gradient__text'>Empowering the Future of Technology</h1>
      </div>
      <div className='gpt3__footer-btn'>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className='gpt3__footer-links'>
        <div className='gpt3__footer-links_logo'>
          <img src={gpt3Logo} alt='logo' />
          <p>Abbotsford, BC. All Rights Reserved</p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Links</h4>
          <p>Encore Concrete ltd.</p>
          <p>Little Wolf Farms inc.</p>
          <p>3315 Chehalis Dr.</p>
          <p>32319 Nakusp Rd.</p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Cookie Policy</p>
        </div>
          <div className='gpt3__footer-links_div'>
          <h4>Get in Touch</h4>
          <p>info@SolarDigital.ca</p>
          <p>(778) 551-2420</p>
          <p>Abbotsford, BC</p>
        </div>
        </div>
        <div className='gpt3__footer-copyright'>
          <p>© 2022 SolarDigital. All rights reserved.</p>
        </div>
      </div>

    )
}

export default Footer;
