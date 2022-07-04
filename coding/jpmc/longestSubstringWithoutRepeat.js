function findLongestSubstring(str) {
    let ans = 0;
    let map = new Map();
    for(let i = 0, j = 0; i < str.length; i++) {
        if(map.get(str.charAt(i))){
            j = Math.max(j, map.get(str.charAt(i)));
        }
        ans = Math.max(ans, i - j);
        map.set(str.charAt(i), i);
    }
    return ans;
//    let map = new Map();
//    let ans = 0;
//    for(let i = 0, j = 0; i < str.length; i++) {
//     if(map.get(str.charAt(i))){
//         j = Math.max(j , map.get(str.charAt(i)));
//     }
//     ans = Math.max(ans, i - j);
//     map.set(str.charAt(i), i);
//    }
//    return ans;
}

let str = "abcab";
console.log(findLongestSubstring(str));