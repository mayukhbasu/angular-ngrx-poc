const findSingleDigitSum = (num) => {
    let sum = 0;
    while(num.toString().length !== 1) {
        sum = 0;
        let current = num;
        while(current !== 0){
            sum += current%10;
            current = Math.floor(current/10);
        }
        num = sum;
    }
    console.log(sum);
    // let sum = 0;
    // while(num.toString().length !== 1) {
    //     sum = 0;
    //     let current = num;
    //     while(current !== 0){
    //         sum += current%10;
    //         current = Math.floor(current / 10);
    //     }
    //     num = sum;
        
    // }
    // console.log(sum);
}

findSingleDigitSum(989);