const firstrepeatingCharacter = (str) => {
    let charArray = [];
    for(let i = 0; i < 256; i++){
        charArray[i] = 0;
    }
    for(let i = 0; i < str.length; i++){
        let value = str.charCodeAt(i);
        charArray[value] ++;
    }
    for(let i = 0; i < str.length; i++){
        let value = str.charCodeAt(i);
        if(charArray[value] > 1){
            return String.fromCharCode(value);
        }
    }
    return -1;
}

console.log(firstrepeatingCharacter("AABD"))