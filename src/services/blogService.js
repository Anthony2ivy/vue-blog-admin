import config from '../config';
import axios from 'axios';

let blogService = {
  backEndUrl: config.backEndUrl,
  axios: axios.create({
    baseURL: config.backEndUrl,
    withCredentials: true,
  }),
};
blogService.checkLogin = function() {
  return new Promise((resolve, reject) => {
    this.axios.post('/rest/login',{username: 'test', password:'test'}).then(() => {
      resolve();
    }).catch(e => {
      reject(e);
    });
  });
};
blogService.login = function(userName, password) {
  return new Promise((resolve, reject) => {
    this.axios.post('/rest/login', {username: userName, password}).then(() => {
      resolve();
    }).catch(e => {
      reject(e);
    });
  });
};

blogService.logout = function() {
  return new Promise((resolve, reject) => {
    this.axios.get('/rest/logout').then(() => {
      resolve();
    }).catch(e => {
      reject(e);
    });
  });
};

export default blogService;
