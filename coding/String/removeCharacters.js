function removeCharacters(str1, str2) {

    let ans = "";
    let MAX_CHARS = 26;
    let charArray = new Array(MAX_CHARS).fill(0);
    for(let i = 0; i < str1.length; i++) {
        charArray[str1[i].charCodeAt(0) - 'a'.charCodeAt(0)] ++;
    }
    for(let i = 0; i < str2.length; i++) {
        if(charArray[str2[i].charCodeAt(0) - 'a'.charCodeAt(0)] === 0) {
            ans += str2[i];
        }
    }

    return ans;
}
var string = "mask"
var  mask_string  = "geeksforgeeks"
console.log(removeCharacters(mask_string,string));