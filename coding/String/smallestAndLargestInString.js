function maxWord(str) {
    let maxLength = 0;
    let minLength = 0;
    let maxWord = "";
    let minWord = "";
    let words = str.split(" ");
    for(let i = 0; i < words.length; i++) {
        let length = words[i].length;
        if(length > maxLength) {
            maxLength = length;
            maxWord = words[i];
        }
        
    }
    console.log(maxWord);
    
}

function minWord(str) {
    let words = str.split(" ");
    let minLength = words[0].length;
    let minWord = words[0];
    for(let i = 1; i < words.length; i++) {
        let length = words[i].length;
        if(length < minLength) {
            minLength = length;
            minWord = words[i];
        }
    }
    console.log(minWord);
} 

const sentence = "I am a tekken player";
let res = sentence.split(" ");
minWord("I am a tekken player")