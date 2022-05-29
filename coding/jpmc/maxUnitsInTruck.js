function findMaxUnits(boxTypes, truckSize) {
    boxTypes.sort((a,b) => a[1] - b[1]);
    let units = 0;
    for(let i = 0; i < boxTypes.length; i++) {
        boxCount = Math.min(truckSize, boxTypes[i][0]);
        units += boxCount * boxTypes[i][1];
        truckSize -= boxCount;
        if(truckSize === 0) break;
    }
    return units;
}

const boxTypes = [[1,3],[2,2],[3,1]];
let truckSize = 4;
console.log(findMaxUnits(boxTypes, truckSize));