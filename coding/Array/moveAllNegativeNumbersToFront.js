function reArrangeNegatives(arr) {
    let low = 0, high = arr.length - 1;
    while(low <= high) {
        if(arr[low] < 0 && arr[high] > 0) {
            [arr[low], arr[high]] = [arr[high], arr[low]];
            low++;
            high--;
        }
        if(arr[low] < 0 && arr[high] < 0) {
            high--;
        }
        if(arr[low] > 0 && arr[high] < 0) {
            low++;
            high--;
        }
        if(arr[low] > 0 && arr[high] > 0) {
            low++;
        }
    }
    console.log(arr)
    // let low = 0, high = arr.length - 1;
    // while(low <= high){
    //     if(arr[low] > 0 && arr[high] < 0){
    //         [arr[low], arr[high]] = [arr[high], arr[low]];
    //         low++;
    //         high --;
    //     }
    //     if(arr[low] < 0 && arr[high]> 0){
    //         low ++;
    //         high --;
    //     }
    //     if(arr[low] < 0 && arr[high] < 0){
    //         low++;
    //     }
    //     if(arr[low] > 0 && arr[high] > 0){
    //         high--;
    //     }
    // }
    // console.log(arr);
}

const arr = [-12, 11, -13, -5, 6, -7, 5, -3, -6];
reArrangeNegatives(arr);