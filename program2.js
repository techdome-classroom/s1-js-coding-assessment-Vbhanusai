const decodeTheRing = function (s, p) {

  // write your code here
  const msgLen = message.length, patLen = pattern.length;
  const dpTable = Array.from({ length: msgLen + 1 }, () => Array(patLen + 1).fill(false));

  dpTable[0][0] = true;

  for (let col = 1; col <= patLen; col++) {
    if (pattern[col - 1] === '*') dpTable[0][col] = dpTable[0][col - 1];
  }

  for (let row = 1; row <= msgLen; row++) {
    for (let col = 1; col <= patLen; col++) {
      if (pattern[col - 1] === '*') {
        dpTable[row][col] = dpTable[row][col - 1] || dpTable[row - 1][col];
      } else if (pattern[col - 1] === '?') {
        dpTable[row][col] = dpTable[row - 1][col - 1];
      } else {
        dpTable[row][col] = dpTable[row - 1][col - 1] && message[row - 1] === pattern[col - 1];
      }
    }
  }

  return dpTable[msgLen][patLen];


};

module.exports = decodeTheRing;