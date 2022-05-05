
// A javascript program to sort a nearly sorted array

function kSort(arr,n,k)
{
	let priorityQueue=[];
        for(let i = 0; i <= k ; i++) {
            priorityQueue.push(arr[i]);
        }
        priorityQueue.sort((a,b) => a - b);
        let index = 0;
        for(let i = k + 1; i < n ; i++) {
            arr[index ++] = priorityQueue[0];
            priorityQueue.shift();
            priorityQueue.push(arr[i]);
            priorityQueue.sort((a,b) => a - b);
        }
        while(priorityQueue.length !== 0) {
            arr[index ++] = priorityQueue[0];
            priorityQueue.shift();
        }
}

// A utility function to print the array
function printArray(arr,n)
{
	for (let i = 0; i < n; i++)
			console.log(arr[i] + " ");
}

// Driver Code
let k = 3;
let arr = [ 2, 6, 3, 12, 56, 8 ];
let n = arr.length;
kSort(arr, n, k);
console.log("Following is sorted array<br>");
printArray(arr, n);

// This code is contributed by unknown2108
