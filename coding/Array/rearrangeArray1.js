function rearrangeArray(arr) {
    for(let i = 0; i < arr.length;) {
        if(arr[i] > 0 && arr[i] !== i) {
            let temp = arr[arr[i]];
            arr[arr[i]] = arr[i];
            arr[i] = temp;
        } else {
            i++;
        }
    }
    console.log(arr);
    // for(let i = 0; i < arr.length;) {
    //     if(arr[i] >= 0 && arr[i] !== i) {
    //         let element = arr[arr[i]];
    //         arr[arr[i]] = arr[i];
    //         arr[i] = element;
    //     } else {
    //         i++;
    //     }
    // }
    // console.log(arr);
}

let arr = [-1, -1, 9, 1, 6, 2, 3, -1, 4, -1 ];
rearrangeArray(arr);