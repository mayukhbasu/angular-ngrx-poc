const editDistance = (str1 = "", str2 = "") => {
    let track = [];
    for(let i = 0; i <= str1.length; i++) {
        track[i] = [];
        for(let j = 0; j <= str2.length; j++) {
            track[i][j] = 0;
        }
    }
    for(let i = 0; i<= str1.length; i++) {
        track[i][0] = i;
    }
    for(let j = 0; j <= str2.length; j++) {
        track[0][j] = j;
    }
    for(let i = 1; i <= str1.length; i++) {
        for(let j = 1; j <= str2.length; j++) {
            const indicator = str1[i - 1] === str2[j - 1] ? 0: 1;
            track[i][j] = Math.min(
                1 + track[i][j - 1], 1 + track[i - 1][j], track[i - 1][j - 1] + indicator
            )
        }
    }
    console.log(track)
    return track[str1.length][str2.length];
}
const str1 = 'hitting';
const str2 = 'kitten';
console.log(editDistance(str1, str2))
