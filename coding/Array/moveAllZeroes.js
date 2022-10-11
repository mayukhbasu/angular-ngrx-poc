function moveAllZero(arr) {
    let low = 0, high = arr.length - 1;
    while(low <= high) {
        if(arr[low] === 0) {
            [arr[low], arr[high]] = [arr[high], arr[low]];
            low++;
            high--;
        } else {
            low++;
        }
    }
    console.log(arr);
    // let left = 0, right = arr.length - 1;
    // while(left <= right) {
    //     if(arr[left] === 0){
    //         [arr[left], arr[right]] = [arr[right], arr[left]];
    //         left++;
    //         right--;
    //     } else {
    //         left++;
    //     }
    // }
    // console.log(arr);
}

let arr = [1, 2, 0, 0, 0, 3, 6];
moveAllZero(arr);