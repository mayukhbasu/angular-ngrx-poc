const nonAdjacentSum = (nums, i = 0, memo = {}) => {
    if(i in memo) return memo[i];
    if(i >= nums.length) return 0;
    const oddSum = nums[i] + nonAdjacentSum(nums, i + 2, memo);
    const evenSum = nonAdjacentSum(nums, i + 1);
    memo[i] = Math.max(oddSum, evenSum);
    return Math.max(oddSum, evenSum);
    // if( i in memo) return memo[i]
    // if(i >= nums.length) return 0;
    // const include = nums[i] + nonAdjacentSum(nums, i + 2);
    // const exclude = nonAdjacentSum(nums, i + 1);
    // memo[i] = Math.max(include, exclude);
    // return Math.max(include, exclude);
}

const nums = [2, 4, 5, 12, 7];
console.log(nonAdjacentSum(nums));