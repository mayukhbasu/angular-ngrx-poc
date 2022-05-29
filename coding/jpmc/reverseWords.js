const reverseWords = (str) => {
    let reverseSentence = str.split(" ").reverse().join(" ");
    return reverseSentence;
}

const str = "geeks quiz practice code";
console.log(reverseWords(str));