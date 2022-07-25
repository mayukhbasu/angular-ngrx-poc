var isPossible = function(nums) {
    if(nums.length < 3) return false;
    const appendMap = new Map();
    const freqMap = new Map();
    nums.forEach(num => {
        if(freqMap.has(num)) freqMap.set(num, freqMap.get(num) + 1);
        else freqMap.set(num, 1);
    });
    for(let i of nums) {
        if(freqMap.get(i) === 0) continue;
        else if((appendMap.get(i) || 0) > 0) {
            appendMap.set(i, appendMap.get(i) - 1);
            appendMap.set(i + 1, (appendMap.get(i + 1) || 0) + 1);
        } else if((freqMap.get(i + 1) || 0) > 0 && (freqMap.get(i + 2) || 0) > 0) {
            freqMap.set(i + 1, (freqMap.get(i + 1) || 0) - 1);
            freqMap.set(i + 2, (freqMap.get(i + 2) || 0) - 1);
            appendMap.set(i + 3, (appendMap.get(i + 3) || 0) + 1);
        } else return false;
        freqMap.set(i, freqMap.get(i) - 1);
    }
    return true;
    // if(nums.length < 3) return false;
    
    // const freqMap = new Map(), appendfreq = new Map();
    // nums.forEach(num => {
    //     if(freqMap.has(num)) freqMap.set(num, freqMap.get(num) + 1);
    //     else {
    //         freqMap.set(num , 1);
    //     }
    // });
    
    //  for (let i of nums) {
    //     if (freqMap.get(i) == 0) continue;
    //     else if ((appendfreq.get(i) || 0) > 0) {
    //         appendfreq.set(i, appendfreq.get(i) - 1);
    //         appendfreq.set(i+1, (appendfreq.get(i+1) || 0) + 1);
    //     }   
    //     else if ((freqMap.get(i+1) || 0) > 0 && (freqMap.get(i+2) || 0) > 0) {
    //         freqMap.set(i + 1, (freqMap.get(i + 1) || 0) - 1);
    //         freqMap.set(i + 2, (freqMap.get(i + 2) || 0) - 1);
    //         appendfreq.set(i + 3, (appendfreq.get(i + 3) || 0) + 1);
    //     }
    //     else return false;
    //     freqMap.set(i, freqMap.get(i) - 1);
    // }
    // return true;
};
  //console.log(isPossible([1, 2, 3, 4, 5, 5]))
   console.log(isPossible([1, 2, 3, 3, 4, 4, 5, 5]))
  // console.log(isPossible([1, 2, 3, 4, 4, 5]))