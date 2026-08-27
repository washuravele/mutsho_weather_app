import React from 'react';

function CityWeatherDescription(props) {
  return (
    <div className="description">
      <div>
        <p className="montserrat" style={{ fontWeight: '700' }}>
          City Name: <span>{props.city}</span>
        </p>
      </div>
      <div>
        <p className="montserrat" style={{ fontWeight: '700' }}>
          Country: <span>{props.country}</span>
        </p>
      </div>
      <div>
        <p className="montserrat" style={{ fontWeight: '700' }}>
          Weather: <span>{props.desc}</span>
        </p>
      </div>
      <div className="cityTemp">
        <div>
          {' '}
          <i class="thermometer empty icon"></i> <span>77</span>
        </div>
        <div>
          <i class="thermometer full icon"></i> <span>99</span>
        </div>

        <div>
          <i class="tachometer alternate icon"></i>
          <span>54</span>
        </div>
      </div>
    </div>
  );
}

export default CityWeatherDescription;
