const chocolatedistribution = (chocolates = [], students) => {
    chocolates.sort((a, b) => a - b);
    let minDiff = Infinity;
    for(let i = 0; i + students - 1 < chocolates.length; i++) {
        minDiff = Math.min(minDiff, chocolates[i + students - 1] - chocolates[i]);
    }
    return minDiff;
}

const cPackets = [7, 3, 2, 4, 9, 12, 56];
const students = 3;
console.log(chocolatedistribution(cPackets, students));