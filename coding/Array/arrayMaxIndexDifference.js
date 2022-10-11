const maxDifference = (arr = [], n) => {
    const right = [];
    let maxDiff = 0;
    right[n - 1] = arr[n - 1];
    for(let i = n - 2; i >= 0; i--) {
        right[i] = Math.max(arr[i], right[i + 1]);
    }
    let i = 0, j = 0;
    while(i < arr.length && j < arr.length) {
        if(arr[i] <= right[j]) {
            maxDiff = Math.max(j - i, maxDiff);
            j++;
        } else {
            i++;
        }
    }
    return maxDiff;
}

let arr = [ 34,8,10,3,2,80,30,33,1];
let n = arr.length;
console.log(maxDifference(arr, n));