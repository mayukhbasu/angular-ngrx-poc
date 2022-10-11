function findInRSorted(arr = [], target) {
  
    // let start = 0, end = arr.length - 1;
    // while(start <= end) {
    //     let mid = Math.floor((start + end) / 2);
    //     if(arr[mid] === target) return mid;
    //     if(arr[start] <= arr[mid]) {
    //         if(target >= arr[start] && target < arr[mid]) {
    //             end = mid - 1;
    //         } else {
    //             start = mid + 1;
    //         }
    //     } else {
    //         if(target > arr[mid] && target <= arr[end]) {
    //             start = mid + 1
    //         } else {
    //             end = mid - 1;
    //         }
    //     }
    // }  
    // return - 1;  
}

let arr = [9,10,1,2,3,4,5];
console.log(findInRSorted(arr, 10));
