const minMeetingRooms = (intervals = [[]]) => {
  const startTimes = intervals.map(e => e[0]).map((a, b) => a - b);
  const endTimes = intervals.map(e => e[1]).map((a, b) => a - b);
  let count = 0, max = 0;
  while(startTimes.length && endTimes.length) {
    if(startTimes[0] < endTimes[0]) {
      startTimes.shift()
    }
  }
}

const intervals = [[0,30],[5,10],[15,20]];
//const intervals = [[0,10],[15, 20]];
console.log(minMeetingRooms(intervals));