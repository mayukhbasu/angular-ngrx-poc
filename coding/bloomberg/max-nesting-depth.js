var maxDepth = (str = "") => {
    let max = 0, count = 0;
    for(let char of str) {
        if(char === '(') {
            count++;
            max = Math.max(max, count);
        } else if(char === ')') {
            count--;
        }
    }
    return max;
}

const s = "(1)+((2))+(((3)))";
console.log(maxDepth(s));