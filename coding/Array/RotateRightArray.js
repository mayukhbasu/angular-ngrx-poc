function reverse(arr, left, right){
    while(left < right){
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left ++;
        right --;
    }
}

function rotateRight(arr, d, n){
    if(d == 0) return;
    reverse(arr, 0 , n - 1);
    reverse(arr, 0 , d- 1);
    reverse(arr, d , n - 1);
}

let arr = [1,2,3,4,5];
rotateRight(arr, 2, arr.length);
console.log(arr);