
const lcs = (str1 = '', str2 = '') => {
  const memo = {};
  return longestCommonSubsequence(str1, str2, str1.length - 1, str2.length - 1, memo);
}

const longestCommonSubsequence = (text1 = '', text2 = '', index1, index2, memo = {}) => {
  if(index1 < 0 || index2 < 0) return 0;
  const pos = index1 + ',' + index2;
  if(memo[pos]) return memo[pos];
  let result;
  if(text1.charAt(index1) === text2.charAt(index2)) {
    result = 1 + longestCommonSubsequence(text1, text2, index1 - 1, index2 - 1, memo);
  } else {
    result = Math.max(
      longestCommonSubsequence(text1, text2, index1 - 1, index2, memo),
      longestCommonSubsequence(text1, text2, index1, index2 - 1, memo)
    )
  }
  memo[pos] = result;
  return result;
}


const str1 = 'AGGTAB';
const str2 = 'GXTXAYB';
console.log('Length of LCS is ', lcs(str1, str2));