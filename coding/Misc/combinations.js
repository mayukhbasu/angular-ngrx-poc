const createCombinations = (items = [], k) => {
   if(k === 0) return [[]];
   if(items.length < k) return [];
   const first = items[0];
   const partialCombos = createCombinations(items.slice(1), k - 1);
   const combosWithFirst = [];
   for(const combo of partialCombos) {
    combosWithFirst.push([first, ...combo]);
   }
   const combosWithoutFirst = createCombinations(items.slice(1), k);
   return [...combosWithFirst, ...combosWithoutFirst];
}

console.log(createCombinations(["a", "b", "c", "d", "e"], 3));