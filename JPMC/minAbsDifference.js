function minAbsDifference(arr) {
    arr.sort((x, y) => x - y);
    let minDiff = Number.MAX_VALUE;
    let results = [];
    for(let i = 0; i < arr.length - 1; i++) {
        if(arr[i+1] - arr[i] === minDiff) {
            results.push([arr[i], arr[i+1]]);
        } else if(arr[i+1] - arr[i] < minDiff) {
            results = [];
            results.push([arr[i], arr[i+1]]);
            minDiff = Math.abs(arr[i+1] - arr[i]);
        }
    }
    return results;
}

let arr = [4,2,1,3];
console.log(minAbsDifference(arr));
