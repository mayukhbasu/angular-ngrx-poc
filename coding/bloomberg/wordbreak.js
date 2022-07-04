var wordBreak = function(s, wordDict) {
    const dp = Array(s.length);
    var map = {};
    for(let word of wordDict){
        map[word] = true;
    }
    return find(s, map, dp, 0);
  };
  
  var find = function (s, map, dp, index) {
    let str = '';
    let temp = null;
    dp[index] = [];
    for(let i = index; i < s.length; i++) {
        str = s.substring(index , i+1);
        if(!map[str]) continue;
        if(i === s.length - 1){
            dp[index].push(str);
            break;
        }
        temp = find(s, map, dp, i + 1);
        for(let j = 0; j < temp.length; j++) {
            dp[index].push(str +' '+temp[j]);
        }
    }
    return dp[index];
    // let str = '';
    // let temp = null;
    // dp[index] = [];
    // for(let i = index; i < s.length; i++) {
    //     str = s.substring(index, i+1);
    //     if(!map[str]) continue;
    //     if(i === s.length - 1) {
    //         dp[index].push(str);
    //         break;
    //     }
    //     temp = find(s, map, dp, i + 1);
    //     for(let j = 0; j < temp.length; j++) {
    //         dp[index].push(str+' '+temp[j]);
    //     }
    // }
    // return dp[index];
    
  };

  let s = "catsanddog", wordDict = ["cat","cats","and","sand","dog"];
  console.log(wordBreak(s, wordDict));

  