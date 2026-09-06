import React from 'react';

class WeatherMessageAlerts extends React.Component {
  state = { main: '', first: '', second: '', alerts: '' };

  onHandleMain = () => {
    this.setState({ first: '' });
    this.setState({ main: '' });
    this.setState({ second: '' });
  };

  onHandleFirst = () => {
    this.setState({ first: 'first' });
    this.setState({ second: '' });

    this.setState({ main: 'main' });
  };

  onHandleSecond = () => {
    this.setState({ first: '' });
    this.setState({ second: 'second' });
    this.setState({ main: 'main' });
  };

  selectedRandomPicture = () => {
    const methods = [
      this.onHandleFirst,
      this.onHandleMain,
      this.onHandleSecond,
    ];
    const random = Math.floor(Math.random() * methods.length);
    return methods[random]();
  };
  componentDidMount() {
    this.randomMessages();
    this.interval = setInterval(() => {
      this.randomMessages();
      this.selectedRandomPicture();
    }, 6000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  randomMessages = () => {
    const advice = [
      'Great weather! Stay hydrated, use sunscreen, and enjoy the outdoors.',
      'Wear sunscreen, drink plenty of water, and consider wearing sunglasses.',
      'The weather is cloudy. You can go outside, but keep a light jacket nearby.',
      'Take an umbrella or raincoat and be careful on wet roads and slippery surfaces.',
      'Be careful around trees and loose objects. Secure outdoor items if necessary.',
      'Check the forecast before going outside and dress appropriately for the conditions.',
    ];

    const random = Math.floor(Math.random() * advice.length);
    this.setState({ alerts: advice[random] });
  };

  render() {
    return (
      <div className="alerts montserrat">
        <div className="alertImgs">
          <div
            onClick={this.onHandleMain}
            className={`img-main ${this.state.main} `}
          ></div>
          <div
            onClick={this.onHandleFirst}
            className={`img-first ${this.state.first} `}
          ></div>
          <div
            onClick={this.onHandleSecond}
            className={`img-second ${this.state.second}`}
          ></div>
        </div>
        <div className="alertMessages">
          <div>
            <p>{this.state.alerts}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default WeatherMessageAlerts;
/*function WeatherMessageAlerts() {
  const [main, setMain] = useState('');
  const [first, setfirst] = useState('');
  const [second, setSecond] = useState('');
  const [messages, setMessage] = useState(
    'Great weather! Stay hydrated, use sunscreen, and enjoy the outdoors.'
  );

  function onHandleMain() {
    setfirst('');
    setMain('');
    setSecond('');
  }

  function onHandleFirst() {
    setfirst('first');
    setSecond('');
    setMain('main');
  }

  function onHandleSecond() {
    setfirst('');
    setMain('main');
    setSecond('second');
  }
  function randomMessages() {
    const advice = [
      'Great weather! Stay hydrated, use sunscreen, and enjoy the outdoors.',
      'Wear sunscreen, drink plenty of water, and consider wearing sunglasses.',
      'The weather is cloudy. You can go outside, but keep a light jacket nearby.',
      'Take an umbrella or raincoat and be careful on wet roads and slippery surfaces.',
      'Be careful around trees and loose objects. Secure outdoor items if necessary.',
      'Check the forecast before going outside and dress appropriately for the conditions.',
    ];

    setInterval(() => {
      const random = Math.floor(Math.random() * advice.length);
      setTimeout(() => {
        setMessage(advice[random]);
      }, 10000);
    }, 20000);
  }

  return (
    <div className="alerts montserrat">
      <div className="alertImgs">
        <div onClick={onHandleMain} className={`img-main ${main} `}></div>
        <div onClick={onHandleFirst} className={`img-first ${first} `}></div>
        <div onClick={onHandleSecond} className={`img-second ${second}`}></div>
      </div>
      <div className="alertMessages">
        <div>
          <p>{messages}</p>
        </div>
      </div>
    </div>
  );
}

export default WeatherMessageAlerts;*/
