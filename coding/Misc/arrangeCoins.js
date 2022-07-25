const arrangeCoins = (coins) => {
    if(coins === 0) return 0;
    let row = 0;
    let sum = 0;
    let initialCount = 1;
    while(coins >= 0){
        initialCount++;
        row++;
        coins -= initialCount;
    }
    for(let i = 0; i <= row; i++) {
        sum += i;
    }
    console.log(sum);
    if(sum === coins) return row;
    else return row - 1;
}

console.log(arrangeCoins(8));