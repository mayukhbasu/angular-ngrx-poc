const findAnagrams = (str1 = "", str2 = "") => {
    const map = new Map();
    const result = [];
    for(let char of str2) {
        if(map.has(char)) {
            map.set(char, map.get(char) + 1);
        } else {
            map.set(char, 1);
        }
    }
    let end = 0, start = 0, count = map.size;
    while(end < str1.length) {
        const endChar = str1.charAt(end);
        if(map.has(endChar)) {
            map.set(endChar, map.get(endChar) - 1);
            if(map.get(endChar) === 0) count --;
        }
        end++;
        
        while(count === 0) {
            if(end - start === str2.length) result.push(start);
            const startChar = str1.charAt(start);
            if(map.has(startChar)) {
                map.set(startChar, map.get(startChar) + 1);
                if(map.get(startChar) > 0) count++;
            }
            start++;
        }
    }
    return result;
}

const s = "cbaebabacd", p = "abc";
console.log(findAnagrams(s, p));