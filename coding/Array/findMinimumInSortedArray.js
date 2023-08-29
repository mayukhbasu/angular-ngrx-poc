function findMin(arr = [], start, end) {
    while(start < end) {
        let mid = Math.floor((start + end) / 2);
        if(arr[mid] === arr[end]) end--;
        if(arr[mid] > arr[end]) start = mid + 1;
        if(arr[mid] < arr[end]) end = mid;
    }
    return arr[start];
}
var arr1 = [8, 11, 13, 15, 1, 4, 6];
var n1 = arr1.length;
findMin(arr1, 0, n1-1)
console.log(findMin(arr1, 0, n1-1));
 