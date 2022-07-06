const sumPossible = (amount, numbers, memo = {}) => {
    if(amount in memo) return memo[amount];
    if(amount === 0) return true;
    if(amount < 0) return false;
    for(let num of numbers){
        if(sumPossible(amount - num, numbers) === true){
            memo[amount] = true;
            return true;
        }
    }
    memo[amount] = false;
    return false;
}

console.log(sumPossible(8, [5, 12, 4]));