function sortArrayInWaveForm(arr, n) {
    for(let i = 0; i < n; i+= 2) {
        if( i > 0 && arr[i - 1] > arr[i]){
            [arr[i-1], arr[i]] = [arr[i], arr[i - 1]];
        } 
        if( i < n - 1 && arr[i] < arr[i+ 1]) {
            [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
        }
    }
    console.log(arr);
}

let arr = [10, 90, 49, 2, 1, 5, 23];
sortArrayInWaveForm(arr, arr.length);
