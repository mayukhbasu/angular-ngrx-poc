var isPossible = function(target = []) {
    let maxIndex = 0, sum = 0;
    for(let i = 0; i < target.length; i++) {
        sum += target[i];
        if(target[maxIndex] < target[i]) {
            maxIndex = i;
        }
    }
    let diff = sum - target[maxIndex];
    if(target[maxIndex] === 1 || diff === 1) return true;
    if(diff === 0 || diff > target[maxIndex] || target[maxIndex] % diff === 0) return false;
    target[maxIndex] %= diff;
    return isPossible(target);
};

const target = [1,1,1,3];
console.log(isPossible(target));