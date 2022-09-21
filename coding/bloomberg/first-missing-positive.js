const findFirstMissingPositive = (arr = []) => {
    const seen = new Set(arr);
    for(let i = 1;; i++) {
        if(!seen.has(i)) {
            return i;
        }
    }
}
const arr = [1,2,3,4]
console.log(findFirstMissingPositive(arr))