function findAndPrintUncommonChars(str1, str2) {
    let present = new Array(26).fill(0);
    for(let i = 0; i < str1.length; i++) {
        present[str1[i].charCodeAt(0) - 'a'.charCodeAt(0)] = 1;
    }
    for(let i = 0; i < str2.length; i ++) {
        if(present[str2[i].charCodeAt(0) - 'a'.charCodeAt(0)] === 1
        || present[str2[i].charCodeAt(0) - 'a'.charCodeAt(0)] === -1) {
            present[str2[i].charCodeAt(0) - 'a'.charCodeAt(0)] = -1;
        } else {
            present[str2[i].charCodeAt(0) - 'a'.charCodeAt(0)] = 2;
        }
    }
    for(let i = 0; i < 26; i++) {
        if(present[i] === 1 || present[i] === 2) {
            console.log(String.fromCharCode(i + 'a'.charCodeAt(0)));
        }
    }
}

var str1 = "characters";
var str2 = "alphabets";
findAndPrintUncommonChars(str1, str2);