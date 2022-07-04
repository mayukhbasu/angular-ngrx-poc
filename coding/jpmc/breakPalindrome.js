function breakPalindrome(str) {
    let charArray = str.split("");
    for(let i = 0; i < charArray.length; i++) {
        if(charArray[i] !== 'a'){
            charArray[i] = 'a';
            return charArray.join("");
        }
        charArray[charArray.length - 1] = 'b';
        return charArray.join("");
    }
   
}

let str = "axa";
console.log(breakPalindrome(str));


