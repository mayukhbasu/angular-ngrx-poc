const findUnion = (arr1 = [], arr2 = []) => {
    let max = arr1[arr1.length - 1] > arr2[arr2.length - 1] ? arr1[arr1.length - 1]
    : arr2[arr2.length - 1];
    const unionTable = new Array(max + 1).fill(0);
    const results = [];
    results.push(arr1[0]);
    unionTable[arr1[0]]++;
    for(let i = 1; i < arr1.length; i++) {
        if(arr1[i] !== arr1[i - 1]) {
            results.push(arr1[i]);
            unionTable[arr1[i]]++;
        }
    }
    for(let i = 0; i < arr2.length; i++) {
        if(unionTable[arr2[i]] === 0) {
            results.push(arr2[i]);
            unionTable[arr2[i]]++;
        }
    }
    return results;
    // let max = arr1[arr1.length - 1] > arr2[arr2.length - 1] ? arr1[arr1.length - 1]
    // : arr2[arr2.length - 1];
    // let results = [];
    // let unionTable = new Array(max + 1).fill(0);
    // results.push(arr1[0]);
    // unionTable[arr1[0]]++;
    // for(let i = 1; i < arr1.length; i++) {
    //     if(arr1[i] !== arr1[i - 1]) {
    //         results.push(arr1[i]);
    //         unionTable[arr1[i]] ++;
    //     }
    // }
    // for(let i = 0; i < arr2.length; i++) {
    //     if(unionTable[arr2[i]] === 0) {
    //         results.push(arr2[i]);
    //         unionTable[arr2[i]]++;
    //     }
    // }
    // return results;
   
}

var arr1 = [ 1, 2, 2, 2,2,2,2, 3 ];
var arr2 = [ 2, 3, 4, 5 ];
console.log(findUnion(arr1, arr2));

// let max = arr1[arr1.length - 1] > arr2[arr2.length - 1] ? arr1[arr1.length - 1]
    // : arr2[arr2.length - 1];
    // let unionArray = new Array(max + 1).fill(0);
    // let result = [];
    // result.push(arr1[0]);
    // unionArray[arr1[0]] ++;
    // for(let i = 1; i < arr1.length; i++) {
    //     if(arr1[i] !== arr1[i-1]) {
    //         result.push(arr1[i]);
    //         unionArray[arr1[i]]++;
    //     }
    // }
    // for(let i = 0; i < arr2.length; i++) {
    //     if(unionArray[arr2[i]] === 0) {
    //         result.push(arr2[i]);
    //         ++unionArray[arr2[i]];
    //     }
    // }
    // return result;