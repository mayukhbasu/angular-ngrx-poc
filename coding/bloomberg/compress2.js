const compressString = (str = '') => {
  let count = 1;
  let compressed = '';
  for(let i = 1; i <= str.length; i++) {
    if(str[i] === str[i - 1]) {
      count++;
    } else {
      compressed += str[i - 1] + count;
      count = 1;
    }
  }
  return compressed;
}

const input = "nnneeeeeeeeeeeezn";
console.log(compressString(input)); // Expected output: n3e12z1n1