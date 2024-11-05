'use strict';

const generateKey = (length, possible) => {
  const bord = possible.length;
  let key = '';
  for (let i = 0; i < length; i++) {
    const char = Math.floor(Math.random() * bord);
    key += possible[char];
  }
  return key;
};

module.exports = { generateKey };
