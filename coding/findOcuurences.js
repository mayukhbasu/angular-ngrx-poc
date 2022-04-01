const findOccurences = (str) => {
    let result = {};
    for(let i = 0; i < str.length; i++){
        if(Object.keys(result).includes(str.charAt(i)) ){
            result[str.charAt(i)] = result[str.charAt(i)] + 1;
        } else {
            result[str.charAt(i)] = 1;
        }
    }
    return result;
}

const test = "aabccdd";
console.log(findOccurences(test));