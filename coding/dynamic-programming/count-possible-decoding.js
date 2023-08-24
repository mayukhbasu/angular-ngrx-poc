const countPossibleDecoding = (digits = []) => {
  const count = new Array(digits.length + 1);
  if(digits[0] === '0') return 0;
  count[0] = 1;
  count[1] = 1;
  for(let i = 2; i <= digits.length; i++) {
    if(digits[i - 1] > '0') {
      count[i] = count[i - 1];
    }
    if((digits[i - 2] === '1' || digits[i - 2] === '2') && digits[i - 1] < '7') {
      count[i] += count[ i - 2];
    }
  }
  return count[digits.length];
}

let digits = [ '1','2','3','4' ];
console.log(countPossibleDecoding(digits));