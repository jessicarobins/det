import fetch from 'isomorphic-fetch';
import Config from '../../server/config';
import axios from 'axios';

export const API_URL = (typeof window === 'undefined' || process.env.NODE_ENV === 'test') ?
  process.env.BASE_URL || (`http://localhost:${process.env.PORT || Config.port}/api`) :
  '/api';
  
export default function callApi(endpoint, method = 'get', data) {
  return axios({
    baseURL: API_URL,
    method: method,
    credentials: 'same-origin',
    withCredentials: true,
    url: endpoint, 
    data: data,
  })
  .then( (response) => {
    console.log('response: ', response)
    return response.data;
  })
  .catch( (err) => {
    console.log('error:', err)
    return err;
  });
}
