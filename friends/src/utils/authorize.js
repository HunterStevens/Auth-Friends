import axios from 'axios';

export const authorize = () => {

  const token = JSON.parse(localStorage.getItem('token'));

  return axios.create({
    headers: {
      Authorization: token
    },
    baseURL: 'http://localhost:5000'
  });
}