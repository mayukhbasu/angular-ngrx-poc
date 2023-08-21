const minPlatform = (arrivals = [], departures = []) => {
  arrivals.sort((a, b) => a - b);
  departures.sort((a, b) => a - b);
  let plat_needed = 1,result = 1, i = 1, j = 0;
  while(i < arrivals.length && j < departures.length) {
    if(arrivals[i] <= departures[j]) {
      plat_needed++;
      i++;
    } else {
      plat_needed--;
      j++;
    }
    if(plat_needed > result) result = plat_needed;
  }
  return result;
}

let arr = new Array(900, 940, 950, 1100, 1500, 1800);
let dep = new Array(910, 1200, 1120, 1130, 1900, 2000);
console.log(minPlatform(arr, dep));