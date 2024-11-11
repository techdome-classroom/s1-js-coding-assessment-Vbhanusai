const decodeTheRing = function (s, p) {

  // write your code here
  const msgLen = s.length, patLen = p.length;
  const dp = Array.from({ length: msgLen + 1 }, () => Array(patLen + 1).fill(false));
  dp[0][0] = true;
  for (let col = 1; col <= patLen; col++) {
    if (p[col - 1] === '*') dp[0][col] = dp[0][col - 1];
  }
  for (let row = 1; row <= msgLen; row++) {
    for (let col = 1; col <= patLen; col++) {
      if (p[col - 1] === '*') {
        dp[row][col] = dp[row][col - 1] || dp[row - 1][col];
      } else if (p[col - 1] === '?') {
        dp[row][col] = dp[row - 1][col - 1];
      } else {
        dp[row][col] = dp[row - 1][col - 1] && s[row - 1] === p[col - 1];
      }
    }
  }

  return dp[msgLen][patLen];


};

module.exports = decodeTheRing;