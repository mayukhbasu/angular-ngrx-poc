function checkString(str) {
    let count = new Array(26).fill(0);
    for(let i = 0, j = str.length - 1; i < j; i++, j--){
        count[str[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;
        count[str[j].charCodeAt(0) - 'a'.charCodeAt(0)]--;
    }
    for(let i = 0; i < 26; i++){
        if(count[i] !== 0){
            return false;
        }
    }
    return true;
    // let count1 = new Array(26).fill(0);
    // for(let i = 0, j = str.length - 1; i < j; i++, j --) {
    //     count1[str[i].charCodeAt(0) - 'a'.charCodeAt(0)] ++;
    //     count1[str[j].charCodeAt(0) - 'a'.charCodeAt(0)] --;
    // }
    // for(let i = 0; i < 26; i++) {
    //     if(count1[i] !== 0) {
    //         return false;
    //     }

    // }
    // return true;
}
let s = "abab";
console.log(checkString(s));