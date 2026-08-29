import React, { useState, useEffect } from 'react';

const WeatherLoader = () => {
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowError(true);
    }, 20000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="loading-weather">
      {!showError && (
        <div className="loading-weather">
          <div className="ui active inline  loader"></div>
          <div style={{ fontWeight: '500' }} className="montserrat">
            <p>Getting weather for you... Please wait...</p>
          </div>
        </div>
      )}

      {showError && (
        <div className="loading-weather">
          <i class="times circle icon large  red"></i>
          <div style={{ fontWeight: '500' }} className="montserrat">
            <p style={{ color: 'red' }}>Could not find the location</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherLoader;
