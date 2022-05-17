
function decodeWays(str) {
    return recWithMemo(0, str);
}
let map = new Map();
function recWithMemo(index, str) {
   
    
    if(map.has(index)) return map.get(index);
    if(index === str.length - 1) return 1;
    if(index === str.length) return 1;
    if(str.charAt(index) === 0) return 0;
    let ans = recWithMemo(index + 1, str);
    if(str.substring(index, index + 2) <= 26) {
        ans += recWithMemo(index + 2, str);
    }
    map.set(index, ans);
    return ans;
}
decodeWays("226");
console.log(decodeWays("226"));