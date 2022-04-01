// const partition = (arr) => {
//     let pivot = 0, j = 0;
//     for(let i = 0; i < arr.length ; i++){
//         if(arr[i] < pivot){
//             let temp = arr[i];
//             arr[i] = arr[j];
//             arr[j] = temp;
//             j++;
//         }
//     }
//     return j;
// }

// const rearrange = (arr) => {
//     let firstPositive = partition(arr);
//     for(let i = 0; (i < firstPositive && firstPositive < arr.length); firstPositive++, i+= 2){
//         let temp = arr[firstPositive];
//         arr[firstPositive] = arr[i];
//         arr[i] = temp;
//     }
//     console.log(arr);
// }


const partition = (arr) => {
    let pivot =0 , j = 0;
    for(let i = 0; i < arr.length ; i++){
        if(arr[i] < pivot){
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            j++;
        }
    
    }
    return j;
}

 rearrange = (arr) => {
    let index = partition(arr);
    for(let i = 0; (i < index && index < arr.length); index++, i+= 2){
        let temp = arr[index];
        arr[index] = arr[i];
        arr[i] = temp;
    }
    console.log(arr);
}

rearrange([-1,2,3,4,-7,-8,-9]);
























