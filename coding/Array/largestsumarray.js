const maxSubArraySum = (arr = []) => {
 let maxSum = -Infinity;
 let startIndex = 0, endIndex = 0, max_so_far = 0, start = 0;
 for(let i = 0; i < arr.length; i++) {
  max_so_far += arr[i];
  if(max_so_far > maxSum) {
    maxSum = max_so_far;
    start = startIndex;
    end = i;
  }
  if(max_so_far < 0) {
    max_so_far = 0;
    startIndex = i + 1
  }
 }
 return {maxSum, start, end}
}

const arr = [ -2, -3, 4, -1, -2, -1, -5, -3 ];
console.log(maxSubArraySum(arr));