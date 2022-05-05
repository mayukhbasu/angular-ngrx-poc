function reArrange(arr, n) {
    
    let max_index = n - 1;
    let min_index = 0;
    let max_element = arr[max_index] + 1;
    for(let i = 0; i < n ; i++) {
        if(i%2 === 0) {
            arr[i] += (arr[max_index]% max_element)  * max_element;
            max_index --;
        } else {
            arr[i] += (arr[min_index] % max_element) * max_element;
            min_index ++;
        }
    }
    for(let i = 0; i < n ; i++) {
        arr[i] = Math.floor(arr[i]/max_element);
    }
    console.log(arr);
}

let arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
reArrange(arr, arr.length);