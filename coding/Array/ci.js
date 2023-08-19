const findUnion = (arr1 = [], arr2 = []) => {
  const max = arr1[arr1.length - 1] > arr2[arr2.length - 1] ? arr1[arr1.length - 1]
  : arr2[arr2.length - 1];
  const union = new Array(max + 1).fill(0);
  const result = [];
  union[arr1[0]]++;
  result.push(arr1[0]);
  for(let i = 1; i < arr1.length; i++) {
    if(arr1[i] !== arr1[i - 1]) {
      union[arr1[i]]++;
      result.push(arr1[i]);
    }
  }
  for(let i = 0; i < arr2.length; i++) {
    if(union[arr2[i]] === 0) {
      union[arr2[i]]++;
      result.push(arr2[i]);
    }
  }
  return result
}

var arr1 = [ 1, 2, 2, 2,2,2,2, 3 ];
var arr2 = [ 2, 3, 4, 5 ];
console.log(findUnion(arr1, arr2));