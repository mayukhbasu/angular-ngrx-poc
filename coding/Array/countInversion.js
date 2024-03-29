function mergeAndCount(arr, l, m, r) {
    let left = [];
    let right = [];
    for(let i = l ; i <= m; i++) {
        
        left.push(arr[i]);
    }
    for(let i = m + 1; i <= r; i++) {
        right.push(arr[i]);
    }
    let i = 0, j = 0, k = l, swaps = 0;
    while(i < left.length && j < right.length) {
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
    // let left = [];
    // let right = [];
    // for(let i = l; i <= m ; i++) {
    //     left.push(arr[i]);
    // }
    // for(let i = m + 1; i <= r; i++){
    //     right.push(arr[i]);
    // }
    // let i = 0, j = 0, k = l, swaps = 0;
    // while( i < left.length && j < right.length) {
    //     if(left[i] <= right[j]) {
    //         arr[k++] = left[i++];
    //     } else {
    //         swaps += (m + 1) - (l + i);
    //         arr[k++] = right[j++];
    //     }
    // }

    // while( i < left.length) {
    //     arr[k++] = left[i++];
    // }
    // while( j < right.length) {
    //     arr[k++] = right[j++];
    // }
    // return swaps;
    
}

function mergeSortAndCount(arr, l , r) {
    let count = 0;
    if(l < r){
        let m = Math.floor((l + r) / 2);
        count += mergeSortAndCount(arr, l, m);
        count += mergeSortAndCount(arr, m + 1, r);
        count += mergeAndCount(arr, l, m , r);
    }
    return count;
    // let count = 0;
    // if(l < r) {
    //     let mid = Math.floor((l  + r) / 2);
    //     count += mergeSortAndCount(arr, l , mid);
    //     count += mergeSortAndCount(arr, mid + 1, r);
    //     count += mergeAndCount(arr, l, mid, r);
    // }
    // return count;
}

let arr= new Array(1, 20, 6, 4, 5 );
console.log(mergeSortAndCount(arr, 0, arr.length - 1));
