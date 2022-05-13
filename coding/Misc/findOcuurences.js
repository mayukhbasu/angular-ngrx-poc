const findOccurences = (str) => {
    // let result = {};
    // for(let i = 0; i < str.length; i++){
    //     if(Object.keys(result).includes(str.charAt(i)) ){
    //         result[str.charAt(i)] = result[str.charAt(i)] + 1;
    //     } else {
    //         result[str.charAt(i)] = 1;
    //     }
    // }
    // return result;
    let obj = {};
    for(let i = 0; i < str.length ; i++){
        if(Object.keys(obj).includes(str[i])){
            obj[str[i]] = obj[str[i]] + 1;
        } else {
            obj[str[i]] = 1
        }
    }
    return obj;
}

const test = "aabccdd";
console.log(findOccurences(test));