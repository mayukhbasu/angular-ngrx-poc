const removeDuplicates = (arr) => {
    // if(arr.length === 0 || arr.length === 1){
    //     return arr.length;
    // }
    // let count = 0;
    // for(let i = 0; i < arr.length - 1; i++){
    //     if(arr[i] !== arr[i+1]){
    //         arr[count++] = arr[i];
    //     }
        
    // }
    // arr[count++] = arr[arr.length-1];
    // return count;
    if(arr.length === 0 || arr.length === 1){
        return arr.length;
    }
    let count = 0;
    for(let i = 0; i < arr.length - 1; i ++){
        if(arr[i] !== arr[i+1]){
            arr[count++] = arr[i];
        }
    }
    arr[count++] = arr[arr.length - 1];
    return count;
}

const arr = [1, 2, 2, 3, 4, 4, 4, 5, 5, 5];
let point = removeDuplicates(arr);
for(let i = 0; i < point ; i++){
    console.log(arr[i]);
}
