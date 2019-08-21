import axios from 'axios';
const URL = 'http://192.168.1.31:3000/';
// const URL = 'http://localhost:3000/';

export const auth = axios.create({
  baseURL: `${URL}auth/`,
  timeout: 7000,
  headers: {
    Accept: 'application/json',
    // 'Content-Type': 'application/x-www-form-urlencoded',
  },
  responseType: 'json',
});

export const api = axios.create({
  baseURL: URL,
  timeout: 7000,
  headers: {
    Accept: 'application/json',
    // 'Content-Type': 'application/x-www-form-urlencoded',
  },
  responseType: 'json',
});
