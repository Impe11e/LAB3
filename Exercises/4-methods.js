'use strict';

const methods = (iface) => {
  const result = [];
  for (const key in iface) {
    const fn = iface[key];
    if (typeof fn === 'function') {
      result.push([key, fn.length]);
    }
  }
  return result;
};

module.exports = { methods };
