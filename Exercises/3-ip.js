'use strict';

const ipToInt = (ip = '192.168.1.10') => {
  const fn = (res, item) => (res << 8) + item;
  return ip.split('.').map(Number).reduce(fn, 0);
};

module.exports = { ipToInt };
