const minPlatform = (arrivals = [], departures = []) => {
  arrivals.sort((a, b) => a - b);
  departures.sort((a, b) => a - b);
  let platform_need = 1, result = 1, i = 1, j = 0;
  while(i < arrivals.length && j < departures.length) {
    if(arrivals[i] <= departures[j]) {
      platform_need++;
      i++;
    } else {
      platform_need--;
      j++;
    }
    if(platform_need > result) result = platform_need;
  }
  return result;
}

let arr = new Array(900, 940, 950, 1100, 1500, 1800);
let dep = new Array(910, 1200, 1120, 1130, 1900, 2000);
console.log(minPlatform(arr, dep));