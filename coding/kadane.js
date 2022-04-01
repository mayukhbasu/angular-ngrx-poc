const maxSum = (arr) => {
    let max1 = 0, max2 = 0;
    for(let i = 0; i < arr.length; i++){
        max2 = max1 + arr[i];
    }
    if(max2 < 0){
        max2 = 0;
    }
    if(max1 < max2){
        max1 = max2;
    }

    return max1;
}