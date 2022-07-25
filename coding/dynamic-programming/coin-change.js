const countingChange = (amount, coins, i = 0) => {
    if(amount === 0) return 1;
    let total = 0;
    const coin = coins[i];
    for(let qty = 0; qty * coin <= amount; qty ++) {
        let remainder = amount - (qty * coin);
        total += countingChange(remainder, coins, i + 1);
    }
    return total;
    // if(amount === 0) return 1;
    // const coin = coins[i];
    // let total = 0;
    // for(let qty = 0; qty * coin <= amount; qty ++) {
    //     const remainder = amount - (qty * coin);
    //     total += countingChange(remainder, coins, i + 1)
    // }
    // return total;
}

console.log(countingChange(24, [5, 7, 3]));