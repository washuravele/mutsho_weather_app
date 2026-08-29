import React from 'react';

function WeatherMessageAlerts() {
  return (
    <div className="alerts montserrat">
      <div className="rondomBlock1 Block">
        <div>
          <p>Clear skies expected today. Enjoy the sunshine!</p>
        </div>
        <div>
          Adverse weather conditions may make roads slippery and dangerous.
          Allow extra time for your journey.
        </div>
        <div>
          Continuous rainfall may cause rivers and drainage systems to overflow.
          Stay alert for evacuation instructions.
        </div>
      </div>
      <div className="rondomBlock2 Block">
        <div>Low visibility due to fog. Drive carefully.</div>
        <div>Icy conditions may develop on roads. Travel with caution.</div>
        <div>Strong winds are expected. Secure loose outdoor objects.</div>
        <div>Thunderstorms are approaching. Stay indoors if possible.</div>
      </div>
    </div>
  );
}

export default WeatherMessageAlerts;
