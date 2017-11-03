/* eslint-disable no-param-reassign */
import axios from 'axios';
import { BASE_URL } from '../config/constants';

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 1000,
});

export function $http(url = '', data = {}, _type = 'GET', _options = {}) {
  const type = _type.toUpperCase();
  const options = Object.assign(_options, {
    method: type,
    url,
  });

  if (['DELETE', 'GET'].indexOf(type) >= 0) {
    options.parmas = data;
  } else {
    options.data = data;
  }

  return instance(options)
    .then(response => response && response.data).catch(error => Promise.reject(error));
}