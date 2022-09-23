const findTriplet = (arr) => {
    arr.sort((a,b) => a - b);
    for(let i = arr.length - 1; i >= 0; i--){
        let j = 0, k = i-1;
        while(j < k){
            if(arr[i] === arr[j] + arr[k]){
                
                console.log(arr[i]+" "+arr[j]+" "+arr[k]);
            }
            if(arr[i] < arr[j]+ arr[k]){
                j++;
            } else {
                
                k++;
            }
        }
    }
    
}

const arr = [2,3,5,10,21,22];
findTriplet(arr);