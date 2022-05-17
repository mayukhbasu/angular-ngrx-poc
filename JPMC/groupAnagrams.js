function groupAnagrams(words) {
    const finalArray = [];
    const anagram = {};
    for(let word of words) {
        let letters = word.split('').sort().join();
        anagram[letters] = anagram[letters] || [];
        anagram[letters].push(word);
    }
    for(let key in anagram){
        finalArray.push(anagram[key]);
    }
    return finalArray;
}

const arr = ["eat","tea","tan","ate","nat","bat"];
console.log(groupAnagrams(arr));