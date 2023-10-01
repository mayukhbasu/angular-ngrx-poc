const decodeString = (str = '') => {
  const stack = [];
  let currString = '';
  let currNum = 0;
  for(let char of str) {
    if(char === '[') {
      stack.push(currString);
      stack.push(currNum);
      currString = '';
      currNum = 0; 
    } else if(char === ']') {
      let prevNum = stack.pop();
      let prevString = stack.pop();
      currString = prevString + currString.repeat(parseInt(prevNum));
    } else if(parseInt(char) || char === '0') {
      currNum = currNum * 10 + parseInt(char);
    } else {
      currString += char;
    }
  } 
  return currString;
}


console.log(decodeString("3[a]2[bc]"));