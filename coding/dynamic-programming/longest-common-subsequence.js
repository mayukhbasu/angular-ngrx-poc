const lcs = (text1 = '', text2 = '') => {
  const memo = new Map();
  return longestCommonSubsequence(text1, text2, text1.length - 1, text2.length - 1, memo);
}

const longestCommonSubsequence = (text1 = '', text2 = '', index1 , index2, memo = new Map()) => {
  if(index1 < 0 || index2 < 0) return 0;
  const key = index1 + ',' + index2;
  if(memo.has(key)) return memo.get(key);
  let result;
  if(text1.charAt(index1) === text2.charAt(index2)) {
    result = 1 + longestCommonSubsequence(text1, text2, index1 - 1, index2 - 1, memo);
  } else {
    result = Math.max(longestCommonSubsequence(text1, text2, index1 - 1, index2, memo), longestCommonSubsequence(text1, text2, index1, index2 - 1, memo));
  }
  memo.set(key, result);
  return result;
}
const str1 = 'AGGTAB';
const str2 = 'GXTXAYB';
console.log('Length of LCS is ', lcs(str1, str2));