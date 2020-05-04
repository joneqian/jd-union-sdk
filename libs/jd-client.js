const utils = require('./utils');
const request = require('./request');

function JDClient(options) {
  if (!(this instanceof JDClient)) {
    return new JDClient(options);
  }
  options = options || {};

  if (!options.appKey || !options.secretKey) {
    throw new Error('appKey and secretKey are necessary!');
  }

  this.appKey = options.appKey;
  this.secretKey = options.secretKey;
  this.endpoint = options.endpoint || 'https://router.jd.com/api';
}

JDClient.prototype.sign = function(params) {
  var sorted = Object.keys(params).sort();
  var basestring = this.secretKey;
  for (var i = 0, l = sorted.length; i < l; i++) {
    var k = sorted[i];
    basestring += k + params[k];
  }
  basestring += this.secretKey;
  return utils.md5(basestring).toUpperCase();
};

JDClient.prototype.request = function(params) {
  const { method, ...rest } = params;
  const args = {
    timestamp: utils.dateFormat(new Date()),
    v: '1.0',
    sign_method: 'md5',
    format: 'json',
    app_key: this.appKey,
    param_json: JSON.stringify(rest),
    method
  };
  args.sign = this.sign(args);
  return new Promise((resolve, reject) => {
    request
      .get(this.endpoint, args)
      .then(res => resolve(res))
      .catch(err => reject(err));
  });
};

JDClient.prototype.execute = function(apiname, params) {
  params.method = apiname;
  return this.request(params).then(res => {
    const field = `${apiname.replace(/\./g, '_')}_response`;
    if (typeof res === 'string') {
      res = JSON.parse(res);
    }
    if (res['error_response']) {
      const error = res['error_response'];
      return Promise.reject({
        code: parseInt(error.code),
        message: error.zh_desc
      });
    }
    const resp = res[field];
    return JSON.parse(resp.result);
  });
};

module.exports = JDClient;
