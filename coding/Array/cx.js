const minSwaps = (arr = []) => {
  const sortedArr = arr.slice().sort((a, b) => a - b);
  const map = new Map();
  let ans = 0;
  for(let i = 0; i < arr.length; i++) {
    map.set(arr[i], i);
  }
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] !== sortedArr[i]) {
      ans++;
      let temp = arr[i];
      [arr[i], arr[map.get(sortedArr[i])]] = [arr[map.get(sortedArr[i])], arr[i]];
      map.set(temp, map.get(sortedArr[i]));
      map.set(sortedArr[i], i)
    }
  }
  return ans;
}

let a = [9, 1, 4,5];
console.log(minSwaps(a));