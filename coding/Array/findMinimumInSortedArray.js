function findMin(arr, low, high)
{
    while(low < high){
        let mid = (high + low) /2;
        if(arr[mid] === arr[high]){
            high --;
        }
        if(arr[mid] > arr[high]) {
            low = mid + 1;
        }
        if(arr[mid] < arr[high]){
            high = mid;
        }
    }
    return arr[high];
}
 
var arr1 = [5, 6, 1, 2, 3, 4];
var n1 = arr1.length;
findMin(arr1, 0, n1-1)
console.log("The minimum element is " + findMin(arr1, 0, n1-1));
 