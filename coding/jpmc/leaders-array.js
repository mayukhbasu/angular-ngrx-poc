const leadersOfArray = (arr) => {
    let max_value = arr[arr.length - 1];
    for(let i = arr.length -2; i>= 0; i--){
        if(arr[i] > max_value){
            max_value = arr[i];
            console.log(max_value);
        }
    }
}

let arr = [16, 17, 4, 3, 5, 2];
leadersOfArray(arr);