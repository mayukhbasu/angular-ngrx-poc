
function rearrange(arr,n,x)
{
    let newMap = new Map();
    let sortedMap = new Map();
    let index = 0;
    for(let i = 0; i < n; i++) {
        newMap.set(arr[i], Math.abs(x - arr[i]));
    }
    sortedMap = new Map([...newMap.entries()].sort((a,b) => a[1] - b[1]));
    for(const [key, value] of sortedMap.entries()) {
        arr[index ++] = key;
    }
    console.log(arr);
    // let map = new Map();
    // let index = 0;
    // for(let i = 0; i < n; i++) {
    //     map.set(arr[i], Math.abs(x - arr[i]));
    // }
    // let newMap = new Map([...map.entries()].sort((a,b) => a[1] - b[1]));
    // for(const [key, value] of newMap.entries()) {
    //     arr[index ++] = key;
    // }
    // console.log(arr);
    
}

// Function to print the array


// Driver code
let arr=[10, 5, 3, 9 ,2];
let n = arr.length;
let x = 7;
rearrange(arr, n, x);
//printArray(arr, n);

// This code is contributed by ab2127


