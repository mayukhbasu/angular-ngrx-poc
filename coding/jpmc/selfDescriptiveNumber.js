function findSelfDescriptiveNumber(num) {
    const numArr = num.split("");
    let map = new Map();
    for(let i = 0; i < numArr.length; i++){
        if(map.has(numArr[i])){
            map.set(numArr[i], map.get(numArr[i]) + 1);
        } else {
            map.set(numArr[i], 1);
        }
    }
    console.log(map)
    for(let i = 0; i < numArr.length; i++){
        if(map.get(i.toString())){
            if(map.get(i.toString()) != numArr[i]){
                return false;
            }
        }   
        
    }
    // for(let i = 0; i < numArr.length; i++) {
    //     if(countMap.get(i.toString())) {
    //         if(countMap.get(i.toString()) != numArr[i]){
    //             return false;
    //         }
    //     }
       
    // }
    return true;
    // const numArr = num.split("");
    // let countMap = new Map();
    // for(let i = 0; i < numArr.length; i++) {
        
    //     if(countMap.has(numArr[i])){
    //         countMap.set(numArr[i], countMap.get(numArr[i]) + 1);
    //     } else {
    //         countMap.set(numArr[i], 1);
    //     }
    // }
    // for(let i = 0; i < numArr.length; i++) {
    //     if(countMap.get(i.toString())) {
    //         if(countMap.get(i.toString()) != numArr[i]){
    //             return false;
    //         }
    //     }
       
    // }
    
    // return true;
}

console.log(findSelfDescriptiveNumber("521001000"));