const subsets = (elements = []) => {
    if(elements.length === 0) return [[]];
    const first = elements[0];
    const combosWithoutFirst = subsets(elements.slice(1));
    const combosWithFirst = [];
    for(let combo of combosWithoutFirst) {
        combosWithFirst.push([first, ...combo]);
    }
    return [...combosWithoutFirst, ...combosWithFirst];
    // if(elements.length === 0) return [[]];
    // const first = elements[0];
    // const subsetsWithoutFirst = subsets(elements.slice(1));
    // const subsetsWithFirst = [];
    // for(let sub of subsetsWithoutFirst) {
    //     console.log("first is ", first);
    //     console.log("sub is   ", sub);
    //     subsetsWithFirst.push([first, ...sub]);
    // }
    
    // let x = [...subsetsWithFirst, ...subsetsWithoutFirst];
    
    // return [...subsetsWithFirst, ...subsetsWithoutFirst];
}
subsets(['a', 'b', 'c'])
console.log(subsets(['a', 'b', 'c']));



