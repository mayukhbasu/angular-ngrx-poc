const subsets = (input = []) => {
    if(input.length === 0) return [[]];
    const first = input[0];
    const withoutFirst = subsets(input.slice(1));
    const withFirst = [];
    for(const sub of withoutFirst) {
        withFirst.push([first, ...sub]);
    }
    return [...withFirst, ...withoutFirst];
}

const input = 'abc';
console.log(subsets(input.split('')));