function findHappyNumber(num) {
    let seen = new Set();
    while(num !== 1){
        let current = num;
        let sum = 0;
        while(current !== 0){
            sum += (current % 10) * (current % 10);
            current = Math.floor(current / 10);
        }
        if(seen.has(sum)) return false;
        seen.add(sum);
        num = sum;
    }
    return true;
}

console.log(findHappyNumber(19))