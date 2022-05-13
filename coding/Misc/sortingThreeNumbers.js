const sortThreeNumbers = (arr) => {
    let start = 0, mid = 0, high = arr.length -1;
    let temp;
    while(mid <= high){
        switch(arr[mid]){
            case 0:
                temp = arr[start];
                arr[start] = arr[mid];
                arr[mid] = temp;
                start ++;
                mid++;
                break;
            case 1:
                mid ++;
                break;
            case 2:
                temp = arr[high];
                arr[high] = arr[mid];
                arr[mid] = temp;
                high --;
                break;
        }
    }
    for(let i = 0; i < arr.length ; i++){
        console.log(arr[i]+" ")
    }
}

sortThreeNumbers([0,1,2,0,1,0,1,2])