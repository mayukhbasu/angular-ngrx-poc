const findMinValue = (nums) => {
    let minVal = 0;
    let total = 0;
    for(let i = 0; i < nums.length; i++) {
        total += nums[i];
        minVal = Math.min(minVal, total);
    }
    return 1 - minVal;
}

const nums = [-3,2,-3,4,2];
console.log(findMinValue(nums));