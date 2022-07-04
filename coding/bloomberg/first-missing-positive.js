const findFirstMissingPositive = (arr = []) => {
    let temp = 0;
    let i = 0;
    while(i < arr.length) {
        let temp = arr[i];
        if(temp > 0 && temp !== i+1 && temp !== arr[temp - 1]){
            [arr[i], arr[temp - 1]] = [arr[temp - 1], arr[i]];
        } else {
            i++;
        }
    }
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] !== i+1) return i + 1;
    }
    return arr.length + 1;
    // let temp = 0;
    // let i = 0;
    // while(i < arr.length) {
    //     temp = arr[i];
    //     if(temp > 0 && temp !== i + 1 && temp !== arr[temp - 1]){
    //         [arr[i], arr[temp - 1]] = [arr[temp - 1], arr[i]];
    //     } else {
    //         i++;
    //     }
    // }
    // console.log(arr);
    // for(let j = 0; j < arr.length; j++) {
    //     if(arr[j] !== j + 1) return j + 1;
    // }
    // return arr.length + 1;
}
const arr = [1,2,3,4]
console.log(findFirstMissingPositive(arr))