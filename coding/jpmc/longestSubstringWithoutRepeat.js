function findLongestSubstring(str) {
    const map = new Map();
    let start = 0, maxLen = 0;
    for(let i = 0; i < str.length; i++) {
        if(map.has(str[i])) start = map.get(str[i]) + 1;
        map.set(str[i], i);
        maxLen = Math.max(i - start + 1, maxLen);
    }
    console.log(map)
    return maxLen;
}

let str = "abcab";
console.log(findLongestSubstring(str));