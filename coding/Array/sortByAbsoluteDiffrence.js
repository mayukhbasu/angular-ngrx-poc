const { ɵɵclassMapInterpolate1 } = require("@angular/core");

function rearrange(arr,n,x)
{
	let map1 = new Map();
    for(let i = 0; i < n; i++) {
        map1.set(arr[i], Math.abs(x - arr[i]));
    }
    let map2 = new Map([...map1.entries()].sort((a,b) => a[1] - b[1]));
    let index = 0;
    for(const [key, value] of map2.entries()) {
        arr[index ++] = key;
    }
    console.log(arr);
}

// Function to print the array
function printArray(arr,n)
{
	for (let i = 0; i < n; i++)
		console.log(arr[i] + " ");
}

// Driver code
let arr=[10, 5, 3, 9 ,2];
let n = arr.length;
let x = 7;
rearrange(arr, n, x);
printArray(arr, n);

// This code is contributed by ab2127


