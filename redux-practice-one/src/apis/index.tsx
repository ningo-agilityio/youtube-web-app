import { create } from 'apisauce';
import { API } from 'constants/index';

// define the api
const api = create({
  baseURL: API.URL,
});

export default api;
