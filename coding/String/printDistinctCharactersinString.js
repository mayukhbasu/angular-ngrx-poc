    
    function printDistinct(str) {
		let result = ""
        const count = new Array(26).fill(0);
		for(let i = 0; i < str.length; i++) {
			count[str.charCodeAt(i) - 'a'.charCodeAt(0)]++;
		}
		for(let i = 0; i < str.length; i++) {
			if(count[str.charCodeAt(i) - 'a'.charCodeAt(0)] ===1 ) {
				result += str[i];
			}
		}
		return result;
    }
	
	
	// Driver code
	let str = "GeeksforGeeks";
	printDistinct(str);
	console.log(printDistinct(str))
	
	// This code is contributed by avanitrachhadiya2155

