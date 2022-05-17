function mergeIntervals(intervals) {
    intervals.sort((a,b) => a[0] - b[0]);
    let previous = intervals[0];
    const results = [];
    for(let i = 1; i < intervals.length; i++) {
        if(previous[1] >= intervals[i][0]) {
            previous = [previous[0], Math.max(previous[1], intervals[i][1])];
        } else {
            results.push(previous);
            previous = intervals[i];
        }
    }
    results.push(previous);
    return results;
}

const intervals = [[1,4],[2,5]];
console.log(mergeIntervals(intervals));