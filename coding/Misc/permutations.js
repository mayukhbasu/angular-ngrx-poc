const permutations = (items = []) => {
    if(items.length === 0) return [[]];   
    const first = items[0];
    const fullPermutations = [];
    for( let perm of permutations(items.slice(1))){
        for(let i = 0; i <= perm.length; i++) {
            fullPermutations.push([...perm.slice(0, i), first, ...perm.slice(i)])
        }
    }
    return fullPermutations
}

console.log(permutations(['a', 'b', 'c']));