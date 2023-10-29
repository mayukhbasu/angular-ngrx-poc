const isSelfDescriptiveNumber = (num = '') => {
  const numArray = num.split('').map(Number);
  const count = new Array(numArray.length).fill(0);

  for(let i = 0; i < numArray.length; i++) {
    count[numArray[i]]++;
  }
  for(let i = 0; i < numArray.length; i++) {
    if(numArray[i] !== count[i]) return false;
  }
  return true;
}

console.log(isSelfDescriptiveNumber("5210010000"));
