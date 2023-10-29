var wordBreak = function(s = '', wordDict, cache = new Map()) {
    if(cache.has(s)) return cache.get(s);
    if(s.length === 0){
        cache.set(s, []);
        return [];
    }
    const result = [];
    for(let word of wordDict) {
        const index = s.indexOf(word);
        if(index === 0) {
            const newStr = s.slice(word.length);
            const values = wordBreak(newStr, wordDict, cache);
            console.log("Values are ", values);
            if(values.length === 0 && newStr.length === 0) result.push(word);
            else {
                result.push(word + ' '+ values);
            }
        }
    }
    cache.set(s, result);
    
    return result;
    // if(cache.has(s))
    //     return cache.get(s);
    
    // if(s.length === 0){
    //     cache.set(s, []);
    //     return [];
    // }
    
    // const result = [];
    // for(let word of wordDict){
    //     const index = s.indexOf(word);
    //     if(index === 0){
    //         const newStr = s.slice(word.length);
    //         const values = wordBreak(newStr, wordDict, cache);
    //         if(values.length === 0 && newStr.length === 0)
    //             result.push(word);
    //         else{
    //             values.forEach(val => {
    //                 result.push(word + ' ' + val);
    //             });
    //         }
    //     }
    // }
    
    // cache.set(s, result);
    // return result;
};
s = "catsanddog", wordDict = ["cat","cats","and","sand","dog"];
console.log(wordBreak(s, wordDict));