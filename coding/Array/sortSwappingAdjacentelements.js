
	function sortedAfterSwap(arr1, arr2, n){
        for(let i = 0; i < n - 1; i++) {
            if(arr2[i] !== 0) {
                if(arr1[i] !== i+1) {
                    [arr1[i], arr1[i+1]] = [arr1[i+1], arr1[i]];
                }
            }
        }
        for(let i = 0; i < arr1.length; i++){
            if(arr1[i] !== i+1){
                return false;
            }
        }
        return true;
    }
	


    let A = [ 2, 3, 1, 4, 5, 6 ];
    let B = [0, 1, 1, 1, 1];
    let n = A.length;
    sortedAfterSwap(A, B, n);
    if (sortedAfterSwap(A, B, n)) {
        console.log("A can be sorted");
    }
    else {
        console.log("A can not be sorted");
    }

