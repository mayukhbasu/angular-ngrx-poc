var decodeString = function(s) {
    let currString = '';
    let currNum = 0;
    const stack = [];
    for(let char of s) {
        if(char === '[') {
            stack.push(currString);
            stack.push(currNum);
            currString = '';
            currNum = 0;
        } else if(char === ']') {
            let num = stack.pop();
            let prev = stack.pop();
            currString = prev + currString.repeat(parseInt(num));
        } else if(parseInt(char) || char === "0") {
            currNum = currNum * 10 + parseInt(char);
        } else {
            currString += char
        }
    }
    return currString
};

console.log(decodeString("3[a]2[bc]"));
//3[acc]