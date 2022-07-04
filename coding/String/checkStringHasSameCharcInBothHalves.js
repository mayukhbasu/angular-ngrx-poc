function checkString(str) {
    let count = new Array(26).fill(0);
    for(let i = 0, j = str.length - 1; i <j ; i++, j--) {
        count[str.charCodeAt(i) - 'a'.charCodeAt(0)] ++;
        count[str.charCodeAt(j) - 'a'.charCodeAt(0)] --;
    }
    for(let i = 0; i < count.length; i++) {
        if(count[i] !== 0) return false;
    }
    return true;
    // let count = new Array(26).fill(0);
    // for(let i = 0, j = str.length - 1; i < j; i++, j--){
    //     count[str[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;
    //     count[str[j].charCodeAt(0) - 'a'.charCodeAt(0)]--;
    // }
    // for(let i = 0; i < 26; i++){
    //     if(count[i] !== 0){
    //         return false;
    //     }
    // }
    // return true;
}
let s = "ababs";
console.log(checkString(s));