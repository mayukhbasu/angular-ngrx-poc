var twoCitySchedCost = function(costs) {
	const destA = [];
    const differences = [];
    for(let i  = 0; i < costs.length; i++) {
        destA.push(costs[i][0]);
        differences.push(costs[i][1] - costs[i][0])
    }
    let count = Math.floor(costs.length / 2);
    while(count > 0) {
        let minDiff = Math.min(...differences);
        const idx = differences.indexOf(minDiff);
        destA.splice(idx , 1, costs[idx][1]);
        count--;
    }
    return destA.reduce((a, b) => a + b);
    
};

const costs = [[10,20],[30,200],[400,50],[30,20]];
console.log(twoCitySchedCost(costs));