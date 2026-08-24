import React from 'react';
import './NavBar.css';

function NavBar() {
  return (
    <div className="navBar  ">
      <div className="navBar-details">
        <div className="img-logo">
          <img alt="logo" src="/Icons/mutsho_logo.png" />
        </div>
        <div className="theme">
          <img alt="logo" src="/Icons/light-mode.png" />
        </div>
      </div>
      <div className="navBar-animation">
        <div style={{ backgroundColor: 'black', border: '1px solid black' }}>
          b
        </div>
        <div
          style={{ backgroundColor: 'white', border: '1px solid white' }}
        ></div>
        <div
          style={{
            backgroundColor: 'rgb(96, 173, 250)',
            border: '1px solid rgb(96, 173, 250)',
          }}
        ></div>
      </div>
    </div>
  );
}

export default NavBar;
