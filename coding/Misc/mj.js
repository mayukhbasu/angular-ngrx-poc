const createCombinations = (arr = [], k = 0) => {
  if(k === 0) return [[]];
  if(arr.length < k) return [];
  const first = arr[0];
  const partialCombos = createCombinations(arr.slice(1), k - 1);
  const combosWithFirst = [];
  for(let combo of partialCombos) {
    combosWithFirst.push([first, ...combo]);
  }
  const combosWithoutFirst = createCombinations(arr.slice(1), k);
  return [...combosWithFirst, ...combosWithoutFirst];
}

console.log(createCombinations(["a", "b", "c", "d", "e"], 3));