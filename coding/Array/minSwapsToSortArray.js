function minSwaps(arr, n) {
    let ans = 0;
    let map = new Map();
    for(let i = 0; i < n; i++) {
        map.set(arr[i], i);
    }
    let tempArray = arr.slice();
    tempArray.sort();
    
    for(let i = 0; i < n; i++) {
        if(arr[i] !== tempArray[i]) {
            let temp = arr[i];
            ans ++;
            [arr[i], arr[map.get(tempArray[i])]] = [arr[map.get(tempArray[i])], arr[i]];
            map.set(temp, map.get(tempArray[i]));
            map.set(tempArray[i], i);
        }
    }
    return ans;
    
}
let a = [101, 758, 315, 730, 472, 619, 460, 479];
let n = a.length;

// Output will be 5
console.log(minSwaps(a, n));

// This code is contributed by shinjanpatra


