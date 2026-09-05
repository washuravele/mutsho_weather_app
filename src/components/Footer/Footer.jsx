import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className="FooterC">
      <div>
        <p>
          © - Mutsho-
          {new Date().getFullYear()}- ® - <span>Our Weather Your Weather</span>
        </p>
      </div>
    </div>
  );
}

export default Footer;
