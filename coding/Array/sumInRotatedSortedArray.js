function pairInSortedArray(arr, n, sum){
    let i ;
    for(i = 0; i < arr.length ; i++){
        if(arr[i] > arr[i+1]){
            break;
        }
    }
    let low = (i+1)%n;
    let high = i;
    while(low !== high){
        if(arr[low]+arr[high] === sum) return true;
        if(arr[low] + arr[high] < sum) low = (low + 1) % n;
        else {
            high = (high + n - 1)%n;
        }
    }
    return false;
}

let arr = [11, 15, 6, 8, 9, 10];
pairInSortedArray(arr, arr.length, 5)
console.log();