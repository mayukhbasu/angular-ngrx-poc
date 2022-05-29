const chocolatedistribution = (chocolates, students) => {
    // chocolates.sort((a, b) => a - b);
    // let min_diff = Number.MAX_VALUE;
    // for(let i = 0; i + students - 1 < chocolates.length; i++) {
    //     if(min_diff > (chocolates[i+students - 1] - chocolates[i])) {
    //         min_diff = chocolates[i+students - 1] - chocolates[i];
    //     }
    // }
    // return min_diff;
    chocolates.sort((a,b) => a - b);
    let min_diff = Number.MAX_VALUE;
    for(let i = 0; i + students - 1 < chocolates.length; i++){
        min_diff = Math.min(min_diff, chocolates[i+students - 1] - chocolates[i]);
    }
    return min_diff;
}

const cPackets = [7, 3, 2, 4, 9, 12, 56];
const students = 3;
console.log(chocolatedistribution(cPackets, students));