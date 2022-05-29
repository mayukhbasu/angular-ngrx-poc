
function countkDist(str , k) {
    let result = 0;
    let count = new Array(26).fill(0);
    for(let i = 0; i < str.length; i++){
        let dist_char = 0;
        for(let j = i; j < str.length; j++) {
            if(count[str.charCodeAt(j) - 'a'.charCodeAt(0)] === 0)
            dist_char++;
            count[str.charCodeAt(j) - 'a'.charCodeAt(0)]++;
            if(dist_char === k) result++;
        }
    }
    return result;
    // let result = 0;
    // let tempArray = new Array(26).fill(0);
    // for(let i = 0; i < str.length ; i++) {
    //     let dist_chars = 0;
    //     for(let j = i; j < str.length; j++) {
    //         if(tempArray[str.charCodeAt(j) - 'a'.charCodeAt(0)] === 0) dist_chars ++;
    //         tempArray[str.charCodeAt(j) - 'a'.charCodeAt(0)]++;
    //         if(dist_chars === k) {
    //             result ++;
    //         }
    //     }
    // }
    // return result;
}



var ch = "abbcbaa";
var k = 3;
console.log("Total substrings with exactly " +
				k + " distinct characters : "
				+ countkDist(ch, k));
					


