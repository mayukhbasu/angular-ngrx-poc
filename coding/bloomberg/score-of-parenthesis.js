var scoreOfParentheses = function(input = '') {
    const stack = [0];
    for(let i = 0; i < input.length ; i++) {
        if(input.charAt(i) === '(') {
            stack.push(0);
        } else if(input.charAt(i) === ')') {
            const last = stack.pop();
            stack[stack.length - 1] += 2 * last || 1;
        }
    }
    return stack.pop();
};

let s = "()()"
console.log(scoreOfParentheses(s));