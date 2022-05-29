const leadersOfArray = (arr) => {
    let max_value = arr[arr.length - 1];
    console.log(max_value);
    let size = arr.length;
    for(let i = size - 2; i >= 0; i--) {
        if(arr[i] > max_value){
            max_value = arr[i];
            console.log(arr[i]);
        }
    }
}

let arr = [16, 17, 4, 3, 5, 2];
leadersOfArray(arr);