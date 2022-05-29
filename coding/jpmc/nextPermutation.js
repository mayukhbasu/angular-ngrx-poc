function findNextPermutation(nums) {
    let i = nums.length - 2;
    while(i >= 0 && nums[i+1] <= nums[i]) {
        i--;
    }
    if(i >= 0) {
        let j = nums.length - 1;
        while(nums[j] <= nums[i]) {
            j--;
        }
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }
    reverse(nums, i+1);
    console.log(nums)
}

function reverse(nums, start) {
    let i = start, j = nums.length - 1;
    while(i < j) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
        i++;
        j--;
    }
}

const arr = [1,3,5,4,3,2];
findNextPermutation(arr);
