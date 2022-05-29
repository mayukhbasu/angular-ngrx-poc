const maxPalindromicSubsequence = (str, i = 0, j = str.length - 1, memo = {}) => {
    let key = i+','+j;
    if(key in memo) return memo[key];
    if(i === j) return 1;
    if(i > j) return 0;
    if(str[i] === str[j]) {
        memo[key] =  2 + maxPalindromicSubsequence(str, i+1, j - 1);
    } else {
        memo[key] =  Math.max(maxPalindromicSubsequence(str, i+1, j), maxPalindromicSubsequence(str, i, j - 1))
    }
    return memo[key];
}

console.log(maxPalindromicSubsequence("xxbaab"));