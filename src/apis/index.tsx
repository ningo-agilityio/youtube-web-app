import { create } from 'apisauce';
import { API } from 'constants/index';

// define the api
const api = create({
  baseURL: API.URL,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    Accept: 'application/json',
  },
});

export default api;
