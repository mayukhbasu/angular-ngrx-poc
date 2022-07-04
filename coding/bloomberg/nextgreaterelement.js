	const printNextGreaterElement = (arr = []) => {
        if(arr.length === 0) return [];
        const stack = [];
        const results = new Array(arr.length - 1);
        for(let i = arr.length - 1; i >= 0; i--) {
            if(stack.length !== 0) {
                while(stack.length !== 0 && stack[stack.length - 1] <= arr[i]){
                    stack.pop();
                }
            }
            results[i] = stack.length === 0? -1: stack[stack.length - 1];
            stack.push(arr[i]);
        }
        for(let i = 0; i < arr.length; i++){
            console.log(arr[i]+"-->"+results[i])
        }
        // if(arr.length === 0) return [];
        // const stack = [];
        // const result = new Array(arr.length - 1);
        // for(let i = arr.length - 1; i>= 0; i--) {
        //     if(stack.length !== 0) {
        //         while(stack.length !== 0 && stack[stack.length - 1] <= arr[i]){
        //             stack.pop();
        //         }
        //     }
        //     result[i] = stack.length === 0 ? -1: stack[stack.length - 1];
        //     stack.push(arr[i]);
        // }
        // for(let i = 0; i < arr.length; i++){
        //     console.log(arr[i]+"-->"+result[i])
        // }
    }
    
	let arr = [ 11,10,11, 13, 21, 3 ];
	let n = arr.length;

	// Function call
	printNextGreaterElement(arr);
	

