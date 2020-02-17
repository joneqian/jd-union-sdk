const axios = require('axios');
const qs = require('qs');
const request = {};

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
axios.defaults.headers.post.Accept = 'application/json';

request.get = (url, data, options = {}) => {
  data = data || {};

  data = { params: data };
  const promise = new Promise((resolve, reject) =>
    axios({
      url,
      method: 'get',
      ...data,
      ...options
    })
      .then(response => resolve(response.data))
      .catch(error => {
        reject(error);
      })
  );

  return promise;
};

request.post = (url, data, options = {}) => {
  data = data || {};

  data = { data: qs.stringify(data) }

  const promise = new Promise((resolve, reject) =>
    axios({
      url,
      method: 'post',
      ...data,
      ...options
    })
      .then(response => resolve(response.data))
      .catch(error => {
        reject(error);
      })
  );

  return promise;
};

module.exports = request;
