const findLongestSubstring = (str = '') => {
  let start = 0, maxlen = 0;
  const memo = new Map();
  for(let i = 0; i < str.length; i++) {
    if(memo.has(str[i])) {
      start = Math.max(start, memo.get(str[i]));
      maxlen = Math.max(maxlen, i - start + 1);
    } else {
      memo.set(str[i], i);
    }
  }
  return maxlen
}

let str = "abcab";
console.log(findLongestSubstring(str));