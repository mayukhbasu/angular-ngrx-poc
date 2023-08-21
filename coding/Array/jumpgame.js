var jump = function(nums = []) {
  let jump = 0;
  let count = 0;
  let far = 0;
  for(let i = 0; i < nums.length; i++) {
    jump = Math.max(jump, nums[i] + i);
    if(i === far) {
      far = jump;
      count++;
    }
  }
  return count;
};

const nums = [ 1, 100, 5, 8, 9, 2, 6, 7, 6, 8, 9 ];
console.log(jump(nums));