function findSelfDescriptiveNumber(num) {
    const numArr = num.split("");
    let countMap = new Map();
    for(let i = 0; i < numArr.length; i++) {
        
        if(countMap.has(numArr[i])){
            countMap.set(numArr[i], countMap.get(numArr[i]) + 1);
        } else {
            countMap.set(numArr[i], 1);
        }
    }
    for(let i = 0; i < numArr.length; i++) {
        if(countMap.get(i.toString())) {
            if(countMap.get(i.toString()) != numArr[i]){
                return false;
            }
        }
       
    }
    //console.log(countMap);
    return true;
}

console.log(findSelfDescriptiveNumber("521001000"));