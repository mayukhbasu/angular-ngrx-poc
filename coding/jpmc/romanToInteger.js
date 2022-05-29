
let roman = new Map();

roman.set('I', 1);
roman.set('V', 5);
roman.set('X', 10);
roman.set('L', 50);
roman.set('C', 100);
roman.set('D', 500);
roman.set('M', 1000);

function romanToInteger(str) {
    let sum = 0;
    for(let i = 0; i < str.length; i++) {
        if(i !== 0 && roman.get(str.charAt(i)) < roman.get(str.charAt(i+1))) {
            sum += roman.get(str.charAt(i+1)) - roman.get(str.charAt(i));
            i++;
        } else {
            sum += roman.get(str.charAt(i));
        }
    }
    return sum;
    // let sum = 0;
    // for(let i = 0; i < str.length; i++) {
    //     if(i !== str.length - 1 
    //         && roman.get(str.charAt(i)) < roman.get(str.charAt(i+1))){
    //             sum += roman.get(str.charAt(i+1)) - roman.get(str.charAt(i));
    //             i++;
    //     } else {
    //         sum += roman.get(str.charAt(i));
    //     }
    // }
    // return sum;
}

var input = "MCMIV";
console.log(romanToInteger(input));