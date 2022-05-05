function findStatisticalIndicator(arr) {
    let mapForCount = new Map();
    let mapForCountConsecutive = new Map();
    for(let i = 0; i < arr.length; i++) {
        if(mapForCount.has(arr[i])){
            mapForCount.set(arr[i], mapForCount.get(arr[i])+1);
        } else {
            mapForCount.set(arr[i], 1);
        }
    }
    //console.log(mapForCount)
    let index = 0;
    let count = 0;
    for(let i = 0; i < arr.length; i++) {
       if(arr[i] === arr[index]){
        ++count;
        if(count === arr[i]) {
            mapForCountConsecutive.set(arr[i], count);
        } else {
            if(mapForCountConsecutive.get(arr[i]) !== arr[i])
            mapForCountConsecutive.set(arr[i], 0);
        }
        
        
        
       } else {
          index = i;
          count = 1;
       }
    }
    let indicatorOneCount = 0;
    let indicatorTwoCount = 0;
    for(const [key, value] of mapForCount.entries()) {
        if(key === value) indicatorOneCount ++;
    }
    for(const [key, value] of mapForCountConsecutive.entries()) {
        if(key === value) indicatorTwoCount ++;
    }
    console.log(Math.abs(indicatorOneCount - indicatorTwoCount));
    console.log(mapForCount);
    console.log(mapForCountConsecutive)
}

let arr = [2,3,3,3,2,3, 1];
findStatisticalIndicator(arr);