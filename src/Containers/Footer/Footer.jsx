import React from 'react';
import './Footer.scss';

const Footer = () => {

  return (
    <>
      <h2 className="head-text">Contact Us</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          {/* <img src={} alt="email" /> */}
          <a href="mailto:mayahennaa@gmail.com" className="p-text">mayahennaa@gmail.com</a>
        </div>
        <div className="app__footer-card">
          {/* <img src={} alt="phone" /> */}
          <a href="tel:+447359314741" className="p-text">+44 7359 314741</a>
        </div>
      </div>
    </>
  );
};

export default Footer;
