function reverseArray(arr, start, end){
   while(start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
   }
}

function leftRotate(arr, d, n) {
    if(d === 0) return;
    reverseArray(arr, 0 , d - 1);
    reverseArray(arr, d, n - 1);
    reverseArray(arr, 0, n - 1);
}

let arr = [1,2,3,4,5];
leftRotate(arr, 2, arr.length);
console.log(arr);
