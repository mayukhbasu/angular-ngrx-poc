function findUncommonChar(str1, str2) {
    let temp = new Array(26).fill(0);
    let ans = "";
    for(let i = 0; i < str1.length; i++) {
        temp[str1[i].charCodeAt(0) - 'a'.charCodeAt(0)] = 1;
    }
    for(let i = 0; i < str2.length; i++) {
        if(temp[str2[i].charCodeAt(0) - 'a'.charCodeAt(0)] === 1 || 
        temp[str2[i].charCodeAt(0) - 'a'.charCodeAt(0)] === -1) {
            temp[str2[i].charCodeAt(0) - 'a'.charCodeAt(0)] = -1;
        } else {
            temp[str2[i].charCodeAt(0) - 'a'.charCodeAt(0)] = 2;
        }
    }
    for(let i = 0; i < 26; i++) {
        if(temp[i] === 1 || temp[i] === 2) {
            
            ans += String.fromCharCode(i + 'a'.charCodeAt(0));
        }
    }
    console.log(ans);
}
var str1 = "characters";
var str2 = "alphabets";
findUncommonChar(str1, str2);
 
