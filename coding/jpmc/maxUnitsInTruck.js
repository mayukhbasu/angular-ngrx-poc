function findMaxUnits(boxTypes, truckSize) {
   boxTypes.sort((a, b) => b[1] - a[1]);
   let units = 0;
   let boxCount = 0;
   for(let i = 0; i < boxTypes.length; i++) {
    boxCount = Math.min(boxTypes[i][0], truckSize);
    units += boxCount * boxTypes[i][1];
    truckSize -= boxCount;
    if(truckSize === 0) break;
   }
   return units;
    
    
}

const boxTypes = [[1,3],[2,2],[3,1]];
let truckSize = 4;
console.log(findMaxUnits(boxTypes, truckSize));