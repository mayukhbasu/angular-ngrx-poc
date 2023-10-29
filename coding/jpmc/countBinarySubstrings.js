function countBinarySubstring(s) {
    let prevCount = 0, currCount = 1, result = 0;
    for (let i = 1; i < s.length; i++) {
        if (s[i] === s[i - 1]) {
            currCount++;
        } else {
            prevCount = currCount;
            currCount = 1;
        }
        if (prevCount >= currCount) {
            result++;
        }
    }
    return result;
}

console.log(countBinarySubstring("XXXYY"));  // Outputs: 2
