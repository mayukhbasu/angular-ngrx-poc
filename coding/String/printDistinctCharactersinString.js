    
    function printDistinct(str) {
        let count = new Array(256).fill(0);
        let index = new Array(256).fill(str.length);
        for(let i = 0; i < str.length ; i ++) {
            ++count[str[i].charCodeAt(0)];
            if(count[str[i].charCodeAt(0)] === 1) {
                index[str[i].charCodeAt(0)] = i;
            }
            if(count[str[i].charCodeAt(0)] > 1) {
                index[str[i].charCodeAt(0)] = str.length;
            }
        }
        index.sort((a,b) => a - b);
        for(let i = 0; i < 256 && index[i] !== str.length; i++) {
            console.log(str[index[i]])
        }
    }
	
	
	// Driver code
	let str = "GeeksforGeeks";
	printDistinct(str);
	
	
	// This code is contributed by avanitrachhadiya2155

