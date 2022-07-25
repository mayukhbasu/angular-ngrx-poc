const arrayStepper = (nums, i = 0, memo = {}) => {
    if( i in memo) return memo[i];
    if(i >= nums.length) return true;
    const maxSteps = nums[i];
    for(let step = 1; step <= maxSteps; step ++) {
        if(arrayStepper(nums, i + step)){
            memo[i] = true;
            return true;
        }
    }
    memo[i] = false;
    return false;
    // if(i in memo) return memo[i];
    // if(i >= nums.length - 1) return true;
    // const maxStep = nums[i];
    // for(let step = 1; step <= maxStep; i++){
    //     if(arrayStepper(nums, i+step) === true){
    //         memo[i] = true;
    //         return true;
    //     }
    // }
    // memo[i] = false;
    // return false;
}

console.log(arrayStepper([2, 4, 2, 0, 0, 1]));