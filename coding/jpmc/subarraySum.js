
	function findSubarraySum(arr,n,sum)
	{
        let prevSum = new Map();
        let res = 0;
        let currsum = 0;
        for(let i = 0; i < n; i++) {
            currsum += arr[i];
            if(currsum === sum) res++;
            if(prevSum.has(currsum - sum)) res+= prevSum.get(currsum - sum);
            if(!prevSum.has(currsum)) {
                prevSum.set(currsum, 1);
            } else {
                prevSum.set(currsum, prevSum.get(currsum) + 1);
            }
        }
        return res;
		// let prevSum = new Map();
		// let res = 0;
		// let currsum = 0;
		// for (let i = 0; i < n; i++)
		// {
		// 	currsum += arr[i];
		// 	if (currsum === sum)
		// 		res++;
		// 	if (prevSum.has(currsum - sum))
		// 		res += prevSum.get(currsum - sum);
			
		// 	if (!prevSum.get(currsum))
		// 		prevSum.set(currsum, 1);
		// 	else
		// 		prevSum.set(currsum, prevSum.get(currsum) + 1);
		// }
		// return res;
	}
	
	let arr = [10, 2, -2, -20, 10];
	let sum = -10;
	let n = arr.length;
	console.log(findSubarraySum(arr, n, sum));
	
