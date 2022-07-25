var unhappyFriends = function(n, preferences, pairs) {
    
    let happyMap = new Array(n);
    for (let [i, j] of pairs) {
        happyMap[i] = preferences[i].indexOf(j);
        happyMap[j] = preferences[j].indexOf(i);
    }
    
    let unhappy = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < happyMap[i]; j++) {
            let partner = preferences[i][j];
            if (preferences[partner].indexOf(i) < happyMap[partner]) {
                unhappy++;
                break;
            }
        }
    }
    
    return unhappy;
};
n = 4, preferences = [[1, 3, 2], [2, 3, 0], [1, 3, 0], [0, 2, 1]], 
pairs = [[1, 3], [0, 2]]
console.log(unhappyFriends(n , preferences, pairs));