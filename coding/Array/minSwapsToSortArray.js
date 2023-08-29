function minSwaps(arr = [], n) {
    let ans = 0;
    const copy = arr.slice().sort();
    const map = new Map();
    for(let i = 0; i < arr.length; i++) {
        map.set(arr[i], i);
    }
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] !== copy[i]) {
            ans++;
            let temp = arr[i];
            [arr[i], arr[map.get(copy[i])]] = [arr[map.get(copy[i])], arr[i]];
            map.set(temp, map.get(copy[i]));
            map.set(copy[i], i);
        }
    }
    return ans;
    // let ans = 0;
    // let map = new Map();
    // for(let i = 0; i < n; i++) {
    //     map.set(arr[i], i);
    // }
    // let tempArray = arr.slice();
    // tempArray.sort();
    // for(let i = 0; i < arr.length; i++) {
    //     if(arr[i] !== tempArray[i]) {
    //         let temp = arr[i];
    //         ans ++;
    //         [arr[i], arr[map.get(tempArray[i])]] = [arr[map.get(tempArray[i])]
    //         , arr[i]];
    //         map.set(temp, map.get(tempArray[i]));
    //         map.set(tempArray[i], i);
    //     }
    // }
    // console.log(arr);
    // console.log(map);
    // return ans;
}
let a = [9, 1, 4,5];
let n = a.length;

// Output will be 5
console.log(minSwaps(a, n));




