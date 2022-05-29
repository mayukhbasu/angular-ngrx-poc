function findLongestSubstring(str) {
    let map = new Map();
    let ans = 0;
    for(let i = 0, j = 0; i < str.length; i++) {
        if(map.has(str.charAt(i))){
            j = Math.max(j , map.get(str.charAt(i)));
        }
        ans = Math.max(ans, i - j + 1);
        map.set(str.charAt(i), i + 1);
    }
    return ans;
}

let str = "abcab";
console.log(findLongestSubstring(str));