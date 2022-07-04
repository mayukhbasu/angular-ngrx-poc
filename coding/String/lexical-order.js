const lexicalOrder = (word1, word2, alphabet) => {
   const maxLength = Math.max(word1.length, word2.length);
   for(let i = 0; i < maxLength; i++) {
    let char1 = word1[i];
    let char2 = word2[i];
    let index1 = alphabet.indexOf(char1);
    let index2 = alphabet.indexOf(char2);
    if(index1 < index2) return true
    else {
        return false;
    }
   }
   return true;
}

const alphabet = "abcdefghijklmnopqrstuvwxyz";
lexicalOrder("apple", "ample", alphabet); // -> false
console.log(lexicalOrder("apple", "ample", alphabet));