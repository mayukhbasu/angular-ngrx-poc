const chocolatedistribution = (chocolates, students) => {
    
    chocolates.sort((a,b) => a - b);
    let diff = Number.MAX_VALUE;
    for(let i = 0; i+students-1 < chocolates.length; i++) {
        let minDiff = chocolates[i+students - 1] - chocolates[i];
        if(minDiff < diff){
            diff = minDiff;
        }
    }
    return diff;
    // chocolates.sort((a, b) => a - b);
    // let min_diff = Number.MAX_VALUE;
    // for(let i = 0; i + students -1 < chocolates.length; i++) {
    //     let diff = chocolates[i + students -1] - chocolates[i];
    //     if(diff < min_diff){
    //         min_diff = diff;
    //     }
    // }
    // return min_diff;
    
    
}

const cPackets = [7, 3, 2, 4, 9, 12, 56];
const students = 3;
console.log(chocolatedistribution(cPackets, students));