function countBinarySubstring(str) {
    let index = 0, ans = 0;
    let groups = new Array(str.length - 1).fill(0);
    groups[0] = 1;
    for(let i = 1; i < str.length; i++) {
        if(str[i] !== str[i-1]) {
            groups[++index] = 1;
        } else {
            groups[index]++;
        }
    }
    for(let i = 1; i <= index; i++) {
        ans += Math.min(groups[i], groups[i-1]);
    }
    return ans
    
}

console.log(countBinarySubstring("00001111"));