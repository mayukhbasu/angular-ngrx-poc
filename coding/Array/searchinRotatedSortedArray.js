const search = (nums, target) => {
    let low = 0, high = nums.length - 1;
    while(low <= high) {
        let mid = Math.floor((low + high) / 2);
        if(arr[mid] === target) return mid;
        if(arr[low] <= arr[mid]) {
            if(target >= arr[i] && target < arr[mid]){
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        } else {
            if(target > arr[mid] && target <= arr[high]){
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
    }
    return - 1;
}

let arr = [6,7,8,1,2,3,5];
console.log(search(arr, 3));