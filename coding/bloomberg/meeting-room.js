var minMeetingRooms = function(intervals) {
    let max = 0;
    let count = 0;
    const startTimes =  intervals.map(e => e[0]).sort((a, b) => a - b);
    const endTimes = intervals.map(e => e[1]).sort((a, b) => a - b);
    while(startTimes.length > 0 && endTimes.length > 0) {
        if(startTimes[0] < endTimes[0]) {
            startTimes.shift();
            count++;
            
        } else {
            endTimes.shift();
            count--;
        }
        if(count > max) max = count;
    }
    return max;
    // let max = 0
    // let stack = 0
    // let inner = intervals.map(e=>e[0]).sort((a,b)=>a-b)
    // let outter = intervals.map(e=>e[1]).sort((a,b)=>a-b)
    // while(outter.length>0 && inner.length>0) {
    //     if (inner[0] < outter[0]) {
    //         inner.shift()
    //         stack++
    //     } else {
    //         outter.shift()
    //         stack--
    //     }
    //     if (max<stack) max=stack
    // }
    // return max
};
const intervals = [[0,30],[5,10],[15,20]];
//const intervals = [[0,10],[15, 20]];
console.log(minMeetingRooms(intervals));
