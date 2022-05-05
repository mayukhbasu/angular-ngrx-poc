function moveAllZero(arr) {
    let left = 0, right = arr.length - 1;
    while(left <= right) {
        if(arr[left] === 0){
            let temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
            left ++;
            right --;
        } else {
            left ++;
        }
    }
    console.log(arr);
}

let arr = [1, 2, 0, 0, 0, 3, 6];
moveAllZero(arr);