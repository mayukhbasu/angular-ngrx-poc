function reArrangeNegatives(arr) {
    let low = 0, high = arr.length - 1;
    while(low <= high) {
        if(arr[low] < 0 && arr[high] < 0) {
            low++;
        } else if(arr[low] < 0 && arr[high] > 0){
            low ++;
            high--;
        }else if(arr[low] > 0 && arr[high] < 0){
            [arr[low], arr[high]] = [arr[high], arr[low]];
            low++;
            high--;
        } else {
            high--;
        }
    }
    console.log(arr);
    // let low = 0, high = arr.length - 1;
    // while(low <= high){
    //     if(arr[low] < 0 && arr[high] < 0){
    //         low ++;
    //     } else if(arr[low] > 0 && arr[high] < 0){
    //         [arr[low], arr[high]] = [arr[high], arr[low]];
    //         low ++;
    //         high --;
    //     }
    //     else if(arr[low] > 0 && arr[high] > 0){
    //         high --;
    //     } else {
    //         low ++;
    //         high --;
    //     }
    // }
    // console.log(arr);
}

const arr = [-12, 11, -13, -5, 6, -7, 5, -3, -6];
reArrangeNegatives(arr);