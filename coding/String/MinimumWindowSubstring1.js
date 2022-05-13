function Minimum_Window(source, test)
{
    let tempArray = new Array(256).fill(0);
    let ans = Number.MAX_VALUE;
    let count = 0;
    for(let i = 0; i < test.length; i++) {
        if(tempArray[test[i].charCodeAt(0)] === 0) count++;
        tempArray[test[i].charCodeAt(0)]++;
    }
    let i = 0, j = 0;
    while(j < source.length) {
        tempArray[source[j].charCodeAt(0)]--;
        if(tempArray[source[j].charCodeAt(0)] === 0) count--;
        if(count == 0){
            while(count === 0) {
                
                if(ans > j - i + 1) {
                    ans = Math.min(ans, j - i + 1);
                    start = i;
                }
                tempArray[source[i].charCodeAt(0)] ++;
                if(tempArray[source[i].charCodeAt(0)] > 0) count ++;
                i++;
            }
        }
        j++;
    }
    console.log(ans);
}
 
// Driver code
let s = "ADOBECODEBANC";
let t = "ABC";
Minimum_Window(s.split(""), t.split(""));
// console.log("-->Smallest window that " +
//                "contain all character : <br>");
//                Minimum_Window(s.split(""), t.split(""))
// console.log(Minimum_Window(
//     s.split(""), t.split("")));
 
// let tempArray = new Array(256).fill(0);
//     let count = 0, ans = Number.MAX_VALUE;
//     for(let i = 0; i < test.length; i++) {
//         if(tempArray[test[i].charCodeAt(0)] == 0) count++;
//         tempArray[test[i].charCodeAt(0)]++;
//     }
    
//     let i = 0, j = 0;
//     while(j < source.length) {
//         tempArray[source[j].charCodeAt(0)]--;
//         if(tempArray[source[j].charCodeAt(0)] === 0) count --;
//         if(count == 0){
//             while(count === 0) {
//                 if(ans > j - i + 1) {
//                     ans = Math.min(ans, j - i + 1);
//                     start = i;
//                 }
//                 tempArray[source[i].charCodeAt(0)] ++;
//                 if(tempArray[source[i].charCodeAt(0)] > 0) count++;
//                 i++;
//             }
//         }
//         j++;
//     }
//     console.log(ans);