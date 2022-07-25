const maxIncreasingSubseq = (numbers = [], i = 0, previous = -Infinity) => {
    if(i === nums.length) return 0;
    const current = numbers[i];
    const options = [];
    const dontTakeCurrent = maxIncreasingSubseq(numbers, i + 1, previous);
    options.push(dontTakeCurrent);
    if(current > previous) {
        const takeCurrent = 1 + maxIncreasingSubseq(numbers, i + 1, current);
    }
    // if(i === numbers.length) return 0;
    // const current = numbers[i];
    // const options = [];
    // const dontTakeCurrent = maxIncreasingSubseq(numbers, i+1, previous);
    // options.push(dontTakeCurrent);
    // if(current > previous){
    //     const takeCurrent = 1 + maxIncreasingSubseq(numbers, i + 1, current);
    //     options.push(takeCurrent);
    // }
    // console.log(...options);
    // return Math.max(...options);
    
}

const numbers = [4, 18, 20, 10, 12, 15, 19];
console.log(maxIncreasingSubseq(numbers));