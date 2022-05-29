
	function encodedChar(str, k){
        let temp = "";
        let frequency = 0;
        let expand = "";
        for(let i = 0; i < str.length;){
            temp = "";
            frequency = 0;
            while( i < str.length && str.charCodeAt(i) >= 'a'.charCodeAt(0) 
            && str.charCodeAt(i) <= 'z'.charCodeAt(0)) {
                temp+= str[i];
                i++;
            }
            while(i < str.length &&  str.charCodeAt(i) >= '1'.charCodeAt(0) 
            && str.charCodeAt(i) <= '9'.charCodeAt(0)) {
                frequency = frequency * 10 + (str.charCodeAt(i) - '0'.charCodeAt(0));
                i++;
            }
            for(let j = 0; j < frequency; j++){
                expand += temp;
            }
            if(frequency === 0) expand += temp;
        }
        return expand[k - 1];
        // let temp = "";
        // let expand = "";
        // let frequency = 0;
        // for(let i = 0; i < str.length;) {
        //     temp = "";
        //     frequency = 0;
        //     while(i < str.length && str[i].charCodeAt(0) >= 'a'.charCodeAt(0) &&
        //     str[i].charCodeAt(0) <= 'z'.charCodeAt(0)) {
        //         temp += str[i];
        //         i++;
        //     }
        //     while(i < str.length && str[i].charCodeAt(0) >= '1'.charCodeAt(0) &&
        //     str[i].charCodeAt(0) <= '9'.charCodeAt(0)) {
        //         frequency = frequency * 10 + (str[i].charCodeAt(0) - '0'.charCodeAt(0));
        //         i++;
        //     }
        //     for(let j = 0; j < frequency; j++) {
        //         expand += temp;
        //     }
        //     if(frequency === 0) expand += temp;
        // }
        // return expand[k - 1];
    }
	
	
	// Driver program to test the string
	let str = "ab4c12ed3e";
	let k = 21;
    encodedChar(str, k)
	console.log(encodedChar(str, k));
	
	// This code is contributed by avanitrachhadiya2155

