function printCommon(str1, str2) {
    let a1 = new Array(26).fill(0);
    let a2 = new Array(26).fill(0);
    for(let i = 0; i < str1.length; i++) {
        a1[str1[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }
    for(let i = 0; i < str2.length; i++) {
        a2[str2[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }
    for(let i = 0; i < 26; i++) {
        if(a1[i] !== 0 && a2[i] !== 0) {
            for(let j = 0; j < Math.min(a1[i], a2[i]); j++) {
                console.log(String.fromCharCode(i+ 'a'.charCodeAt(0)));
            }
        }
    }
}

let s1 = "geeksforgeeks", s2 = "practiceforgeeks";
printCommon(s1, s2);