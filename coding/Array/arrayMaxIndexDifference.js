const maxDifference = (arr, n) => {

    let lMin = [];
    let rMax = [];
    let maxDiff = 0;
    lMin[0] = arr[0];
    rMax[arr.length - 1] = arr[arr.length - 1];
    for(let i = 1; i < arr.length ; i++) {
        lMin[i] = Math.min(arr[i], lMin[i - 1]);
    }
    for(let i = arr.length - 2; i >= 0; i--) {
        rMax[i] = Math.max(arr[i], rMax[i+1]);
    }
    let i = 0, j = 0;
    while(i < arr.length && j < arr.length) {
        if(lMin[i] <= rMax[j]) {
            maxDiff = Math.max(maxDiff, j - i);
            j++;
        } else {
            i++;
        }
    }
    return maxDiff;
    
}

let arr = [ 9, 2, 3, 4, 5, 6, 7, 8, 18, 0 ];
let n = arr.length;
console.log(maxDifference(arr, n));