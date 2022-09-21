const scoreOfParenthesis = (str = '') => {
    const stack = [0];
    for(let char of str) {
        if(char === '(') {
            stack.push(0);
        } else {
            const last = stack.pop();
            stack[stack.length - 1] += 2 * last || 1;
        }
    }
    return stack.pop();
}

const s = "(())";
console.log(scoreOfParenthesis(s));