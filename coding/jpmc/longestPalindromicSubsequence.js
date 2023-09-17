const maxPalindromicSubsequence = (str, i = 0, j = str.length - 1, memo = {}) => {
    let key = i+"."+j;
    for(let key in memo) return memo[key];
    if(i===j) return 1;
    if(i > j) return 0;
    if(str[i] === str[j]){
        memo[key] = 2 + maxPalindromicSubsequence(str, i+1, j-1, memo);
    } else {
        memo[key] = Math.max(maxPalindromicSubsequence(str, i+1, j, memo), maxPalindromicSubsequence(str, i, j+1, memo));
    }
    return memo[key];
}

console.log(maxPalindromicSubsequence("xxbaab"));