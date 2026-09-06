import React, { useState } from 'react';
import './NavBar.css';

function NavBar(props) {
  const [showOverLayer, setOverLayer] = useState(false);

  function onOverlayerHandle() {
    setOverLayer(true);
  }

  function offOverlayerHandle() {
    setOverLayer(false);
  }

  return (
    <>
      <div className={`navBar-${props.logo}`}>
        <div className="navBar-details">
          <div onClick={onOverlayerHandle} className={`img-logo-${props.logo}`}>
            <img alt="logo" src={`/Icons/mutsho_logo_${props.logo}.png`} />
            <div className={`logo-for-${props.logo}`}></div>
          </div>
          <div className="about"></div>
          <div onClick={props.toggleTheme} className="theme">
            <img alt="logo" src={`/Icons/${props.logo}-mode.png`} />
          </div>
        </div>
        <div className="navBar-animation">
          <div
            style={{ backgroundColor: 'black', border: '1px solid black' }}
          ></div>
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

      {showOverLayer && (
        <div id="about">
          <div className={`about-content-${props.logo}`}>
            <div className="close-about">
              <div className="close-btn" onClick={offOverlayerHandle}>
                <img alt="close button" src="/Icons/icon-close.png" />
              </div>
            </div>
            <div className="about-project">
              <div className="myPicture">
                <div className="the-creator">
                  <img alt="me" src="/Background/my-picture.png" />
                </div>
                <div>
                  <p className="montserrat">
                    Created By :<span>Mr Washu Ravele</span>
                  </p>
                </div>
              </div>
              <div className="montserrat  about-projectB">
                <div className="about-projectC">
                  <h1>Mutsho</h1>
                  <p>
                    <span>Our Weather Your Weather</span>
                  </p>
                  <p>
                    Mutsho Weather App is an updated weather application
                    designed to give users a simple and convenient way to view
                    real-time weather information for their current location.
                    Users can also search for and explore weather conditions in
                    cities around the world.
                  </p>{' '}
                  <p>
                    {' '}
                    While Mutsho provides global weather information, its
                    primary focus is on South Africa, giving South Africans an
                    easy and accessible way to check the weather in the cities
                    they are currently in or searching for. With a clean and
                    user-friendly experience, Mutsho makes staying informed
                    about the weather simple and convenient.
                  </p>
                </div>
                <div className="aboutIcons">
                  <div>
                    <a href="https://github.com/washuravele/mutsho_weather_app">
                      <img
                        src="https://img.icons8.com/ios/50/github--v1.png"
                        alt="github--v1"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default NavBar;
