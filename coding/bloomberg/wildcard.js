function isMatch(s, p) {
  let memo = {};

  function dp(i, j) {
      if (`${i},${j}` in memo) return memo[`${i},${j}`];

      if (j === p.length) return i === s.length;

      let firstMatch = (i < s.length) && (s[i] === p[j] || p[j] === '?');

      if (j < p.length && p[j] === '*') {
          memo[`${i},${j}`] = dp(i, j + 1) || (i < s.length && dp(i + 1, j));
          return memo[`${i},${j}`];
      }

      memo[`${i},${j}`] = firstMatch && dp(i + 1, j + 1);
      return memo[`${i},${j}`];
  }

  return dp(0, 0);
}

let s = "adceb";
let p = "*a*b";
console.log(isMatch(s, p));
