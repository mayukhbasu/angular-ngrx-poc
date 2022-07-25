const canConcat = (s = '', words, memo = {}) => {
   if(s in memo) return memo[s];
   if(s === '') return true;
   for(let word of words) {
    if(s.startsWith(word)) {
        const suffix = s.slice(word.length);
        if(canConcat(suffix, words, memo)){
            memo[s] = true;
            return true;
        }
    }
   }
   memo[s] = false;
   return false;
    // todo
    // if(s in memo) return memo[s];
    // if( s === '') return true;
    // for(let word of words){
    //     if(s.startsWith(word)){
    //         const suffix = s.slice(word.length);
    //         if(canConcat(suffix, words)){
    //             memo[s] = true;
    //             return true;
    //         }
    //     }
    // }
    // memo[s] = false;
    // return false;
};
  

console.log(canConcat("oneisnone", ["one", "none", "is"]));