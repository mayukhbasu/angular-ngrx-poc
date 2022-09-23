const maxIncreasingSubseq = (numbers = []) => {
    let solution = 1;
    const memo = new Array(numbers.length).fill(1);
    for(let i = 1;i < numbers.length; i++) {
        let max = 0;
        for(let j = 0; j < i; j++) {
            if(numbers[j] < numbers[i] && memo[j] > max) {
                max = memo[j];
            }
        }
        memo[i] = 1 + max;;
        solution = Math.max(solution, memo[i]);
    }
    return solution;
}

const numbers = [4, 18, 20, 10, 12, 15, 19];
console.log(maxIncreasingSubseq(numbers));