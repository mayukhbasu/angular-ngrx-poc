const search = (nums, target) => {
    let left = 0, right = nums.length - 1;
    while(left < right){
        let mid = (left + right) / 2;
        if(nums[left] < nums[mid]){
            if(target > nums[left] && target < nums[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else {
            if(target > nums[mid] && target < nums[right]){
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        if(nums[mid] === target) return mid;
    }
    return - 1;
}

let arr = [6,7,8,1,2,3,5];
console.log(search(arr, 3));