const wordBreak = (str = '', wordDict = [], cache = new Map()) => {
    if(cache.has(str)) return cache.get(str);
    if(str.length === 0){
        cache.set(str, []);
        return [];
    }
    const result = [];
    for(let word of wordDict) {
        if(str.indexOf(word) === 0) {
            const newStr = str.slice(word.length)
            const remainingWords = wordBreak(newStr, wordDict, cache);
            if(remainingWords.length === 0 && newStr.length === 0) result.push(word);
            else {
                remainingWords.forEach((value) => {
                    result.push(word + ' '+value);
                })
            }
        }
    }
    cache.set(str, result);
    return result;
}

s = "catsanddog", wordDict = ["cat","cats","and","sand","dog"];
console.log(wordBreak(s, wordDict));