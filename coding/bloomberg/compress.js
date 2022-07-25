const compressString = (str = '') => {
    const countCharacters = new Array(26).fill(0);
    let result = '';
    
    for(let i = 0; i < str.length; i++) {
        countCharacters[str.charCodeAt(i) - 'a'.charCodeAt(0)]++
    }
    for(let i = 0; i < str.length; i++){
        if(str[i] !== str[i-1])
        result += str.charAt(i).concat(countCharacters[str.charCodeAt(i) - 'a'.charCodeAt(0)]);

    }
    return result;
}

console.log(compressString("nnneeeeeeeeeeeez"));