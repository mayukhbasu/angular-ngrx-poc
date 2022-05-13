function countSubstring(str) {
    const MAX_CHAR = 26;
    var n = str.length;
    let result = 0;
    let count = new Array(MAX_CHAR).fill(0);
    for(var i = 0; i < n; i++) {
        count[str[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;

    }
    for(let i = 0; i < MAX_CHAR ; i++) {
        result += count[i] * (count[i] + 1)/2;
    }
    return result;
}

var s = "abcab";
console.log(countSubstring(s));