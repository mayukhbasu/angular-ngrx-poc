const arrayRankTransform = (arr = []) => {
    const temp = [...new Set([...arr])].sort((a, b) => a - b);
    return arr.map((element) => temp.indexOf(element) + 1);
}

const arr = [40,10,20,30];
console.log(arrayRankTransform(arr));

