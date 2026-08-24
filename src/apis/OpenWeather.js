import axios from 'axios';

const KEY = 'a5efca817d6a37dd0ef10096db2900cd';

export default axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5',
  params: {
    appid: KEY,
  },
});
