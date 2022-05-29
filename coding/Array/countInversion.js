function mergeAndCount(arr, l, m, r) {
    let left = [];
    let right = [];
    for(let i = 0; i <= m; i++) {
        left.push(arr[i]);
    }
    for(let i = m + 1; i <= r; i++) {
        right.push(arr[i]);
    }
    let i = 0, j = 0, k = l, swaps = 0;
    while(i < left.length && j < right.length){
        if(left[i] <= right[j]){
            arr[k++] = left[i++];
        } else {
            arr[k++] = right[j++];
            swaps += (m + 1) - (l + i);
        }
    }
     while(i < left.length){
        arr[k++] = left[i++];
    }
    while(j < right.length){
        arr[k++] = right[j++];
    }
    return swaps;
}

function mergeSortAndCount(arr, l , r) {
    let count = 0;
    if( l < r) {
        count += mergeSortAndCount(arr, l, mid);
        count += mergeSortAndCount(arr, mid+1, r);
        count += mergeAndCount(arr, l, mid, r);
    }
    return count; 
}

let arr= new Array(1, 20, 6, 4, 5 );
console.log(mergeSortAndCount(arr, 0, arr.length - 1));