function letterCombinations(digits) {
    const char_map = ["0", "1", "abc", "def", "ghi", "jkl", "mno", "pqrs",
    "tuv", "wxyz"];
    let output = [];
    if(digits.length === 0) return null;
    output.push("");
    for(let i = 0; i < digits.length; i++) {
        let index = parseInt(digits.charAt(i));
        while(output[0].length === i) {
            let permutation = output.shift();
            for(let c of char_map[index]){
                output.push(permutation + c);
            }
        }
    }
    return output;
}

console.log(letterCombinations("23"));