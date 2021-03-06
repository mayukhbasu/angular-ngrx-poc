const validBrackets = (str) => {
    let map = {
        '(':')',
        '{':'}',
        '[':']'
    }
    let stack = [];
    for(let char of str) {
        if(char in map){
            stack.push(map[char])
        } else {
            if(stack.length > 0 && stack[stack.length - 1] === char){
                stack.pop();
            } else {
                return false;
            }
        }
    }
    return stack.length === 0;
    // const stack = [];
    // const brackets = {
    //     '(':')',
    //     '{':'}',
    //     '[':']'
    // }
    // for(let char of str) {
    //     if(char in brackets){
    //         stack.push(brackets[char]);
    //     } else {
    //         if(stack.length > 0 && stack[stack.length - 1] === char){
    //             stack.pop();
    //         } else {
    //             return false;
    //         }
    //     }
    // }
    // return stack.length === 0;
}

let char = "{[]}({})";
console.log(validBrackets(char));