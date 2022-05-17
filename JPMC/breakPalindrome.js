function breakPalindrome(str) {
    let charArray = str.split("");
    for(let i = 0; i < Math.floor(charArray.length/2); i++) {
        if(charArray[i] !== 'a'){
            charArray[i] = 'a';
            return charArray;
        } 
    }
    charArray[charArray.length - 1] = 'b';
    return charArray;
}

let str = "abccba";
console.log(breakPalindrome(str));


