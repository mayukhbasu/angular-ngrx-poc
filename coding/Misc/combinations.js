const createCombinations = (items = [], k) => {
    if(items.length < k) return [];
    if(k === 0) return [[]];
    const first = items[0];
    const partialCombos = createCombinations(items.slice(1), k - 1);
    const combinationWithFirst = [];
    for(let combos of partialCombos) {
        combinationWithFirst.push([first, ...combos]);
    }
    const combinationWithoutFirst = createCombinations(items.slice(1), k);
    return [...combinationWithoutFirst, ...combinationWithFirst];
    // if(items.length < k) return [];
    // if(k === 0) return [[]];
    // const first = items[0];
    // const partialCombos =  createCombinations(items.slice(1), k - 1);
    // const combosWithFirst = [];
    // for(let partialCombo of partialCombos) {
    //     combosWithFirst.push([first , ...partialCombo]); 
    // }
    // const combosWithoutFirst = createCombinations(items.slice(1), k);
    // return [...combosWithFirst, ...combosWithoutFirst];
}

console.log(createCombinations(["a", "b", "c", "d", "e"], 3));