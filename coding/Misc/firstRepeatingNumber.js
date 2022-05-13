const findMaxNumberInArray = (arr) => {
    let max = 0;
    let tempArray = [];
    for(let i = 0; i < arr.length ; i++){
        if(max < arr[i]){
            max = arr[i];
        }
    }
    for(let j = 0; j < max ; j ++){
        tempArray[j] = 0;
    }
    for(let k = 0; k < arr.length; k++){
        let value = arr[k];
        tempArray[value]++;
    }
    for(let i = 0; i < arr.length; i++){
        let value = arr[i];
        if(tempArray[value] > 1){
            return value;
        }
    }
    return -1;
}

const arr = [3,4,4,2,5,6, 2];
console.log(findMaxNumberInArray(arr));