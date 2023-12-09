import axios from 'axios';

const _baseURL: string = 'http://localhost:5000'

const httpsService = axios.create({
  baseURL: _baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default httpsService;