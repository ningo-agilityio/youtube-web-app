import axios from 'axios';
import { API } from '../constants/constants'; 

axios.defaults.headers.common.Authorization = `Bearer ${API.token}`;
