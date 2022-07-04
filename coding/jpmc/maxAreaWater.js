function findMaxWater(arr) {
   let maxArea = 0;
   let left = 0, right = arr.length - 1;
   while(left < right) {
    let width = right - left;
    maxArea = Math.max(maxArea, width * Math.min(arr[left], arr[right]));
    if(arr[left] < arr[right]){
        left++;
    } else {
        right--;
    }
   }
   return maxArea;
    // let maxArea = 0;
    // let left = 0, right = arr.length - 1;
    // while(left < right){
    //     let width = right - left;
    //     maxArea = Math.max(maxArea, width *Math.min(arr[left], arr[right]));
    //     if(arr[left] < arr[right]){
    //         left ++;
    //     } else {
    //         right --;
    //     }
    // }
    // return maxArea;
}

let height = [1,8,6,2,5,4,8,3,7];
console.log(findMaxWater(height));