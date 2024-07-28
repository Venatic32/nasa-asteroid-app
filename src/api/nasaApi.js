import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.nasa.gov/neo/rest/v1/feed',
    params:{
        start_date: '2024-07-25',
        end_date: '2024-07-27',
        api_Key: process.env.REACT_APP_API_KEY,
    },
  });

  export const fetchAsteroids = async () => {
    const response = await api.get('')
    .then(({data}) => {
        console.log('response', data.near_earth_objects);
    });
  };