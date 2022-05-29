const minMoves = (nums) => {
    nums.sort();
    let count = 0;
    for(let i = nums.length - 1; i >= 0; i--){
        count+= nums[i] - nums[0];
    }
    return count;
}