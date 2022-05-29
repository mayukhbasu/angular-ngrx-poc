function findvalidpalindrome(str) {
    let output = "";
    let x = str.toLowerCase();
    var letters = /^[a-z]+$/;
    for(let i = 0; i < x.toLowerCase().length; i++) {
        if(x.toLowerCase().charAt(i).match(letters)) {
            output+= x.charAt(i);
        }
    }
    let reverse = output.split("").reverse().join("");
    console.log(output === reverse);
}

s = "Abba";
findvalidpalindrome(s);