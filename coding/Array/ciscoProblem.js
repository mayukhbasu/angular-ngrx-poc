function findStatisticalIndicator(arr) {
    // Map to count occurrences of each number
    let mapForCount = new Map();

    for(let num of arr) {
        mapForCount.set(num, (mapForCount.get(num) || 0) + 1);
    }

    let indicatorOneCount = 0;
    for(const [key, value] of mapForCount.entries()) {
        if(key === value) indicatorOneCount++;
    }

    let indicatorTwoCount = 0;
    for(let i = 0; i < arr.length; ) {
        let count = 0;
        let currentNum = arr[i];
        
        // Count consecutive occurrences
        while(i < arr.length && arr[i] === currentNum) {
            count++;
            i++;
        }

        if(count === currentNum) indicatorTwoCount++;
    }

    console.log("Indicator One Count:", indicatorOneCount);
    console.log("Indicator Two Count:", indicatorTwoCount);
    console.log("Difference:", Math.abs(indicatorOneCount - indicatorTwoCount));
}

let arr = [2,3,3,3,2,3,1];
findStatisticalIndicator(arr);
