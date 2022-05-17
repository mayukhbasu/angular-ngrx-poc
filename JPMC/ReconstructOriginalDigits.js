
function originalDigits(str) {
   let MAX_CHAR = 26;
   let countCharacters = new Array(MAX_CHAR).fill(0);
   for(let i = 0; i < str.length; i++) {
       countCharacters[str[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;
   }
   let output = new Array(10).fill(0);
   output[0] = countCharacters['z'.charCodeAt(0) - 'a'.charCodeAt(0)];
   output[2] = countCharacters['w'.charCodeAt(0) - 'a'.charCodeAt(0)];
   output[4] = countCharacters['u'.charCodeAt(0) - 'a'.charCodeAt(0)];
   output[6] = countCharacters['x'.charCodeAt(0) - 'a'.charCodeAt(0)];
   output[8] = countCharacters['g'.charCodeAt(0) - 'a'.charCodeAt(0)];
   output[3] = countCharacters['h'.charCodeAt(0)] - output[8];
   output[5] = countCharacters['f'.charCodeAt(0) - 'a'.charCodeAt(0)] - output[4];
   output[7] = countCharacters['v'.charCodeAt(0) - 'a'.charCodeAt(0)] - output[5];
   output[9] = countCharacters['i'.charCodeAt(0) - 'a'.charCodeAt(0)] 
   - output[5] - output[6] - output[8];
   output[1] = countCharacters['o'.charCodeAt(0) - 'a'.charCodeAt(0)] - output[2]
   - output[4] - output[0];
   let numbers = [];
   for(let i = 0; i < 10; i ++) {
        while(output[i]-- > 0) {
            numbers.push(i);
        }
   }
   return numbers.join("");
}

console.log(originalDigits("owoztneoer"))