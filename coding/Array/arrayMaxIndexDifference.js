const maxDifference = (nums = []) => {
    let maxDifference = -1;
    let minValue = Infinity;
    for(let i = 0; i < nums.length; i++) {
        minValue = Math.min(nums[i], minValue);
        maxDifference = Math.max(maxDifference, nums[i] - minValue);
    }
    if(maxDifference === 0) return -1
    else return maxDifference;
}

let arr = [ 34,8,10,3,2,30,33,1, 80];
let n = arr.length;
console.log(maxDifference(arr, n));