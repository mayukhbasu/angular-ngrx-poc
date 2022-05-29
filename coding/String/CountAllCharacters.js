function countAllCharacters(str) {
    let lowerCase = 0, uppercase = 0, numbers = 0, specialCharacters = 0;
    for(let i = 0; i < str.length; i++){
        if(str[i] >= 'A' && str[i] <= 'Z') uppercase++;
        else if(str[i] >= 'a' && str[i] <= 'z') lowerCase++;
        else if(str[i] >= '0' && str[i] <= '9') numbers++;
        else {
            specialCharacters++;
        }
    }
    console.log("Uppercase ", uppercase);
    console.log("Lower Case ", lowerCase);
    console.log("numbers ", numbers);
    console.log("Special Characters  ", specialCharacters);
    // let lowerCase = 0, uppercase = 0,numbers = 0; specialCharacter = 0;
    // for(let i  = 0 ; i < str.length; i ++) {
    //     if(str[i] >= "A" && str[i] <= 'Z') {
    //         uppercase ++;
    //     } else if(str[i] >= "a" && str[i] <= "z"){
    //         lowerCase ++;
    //     } else if(str[i] >= "0" && str[i] <= "9"){
    //         numbers ++;
    //     } else {
    //         specialCharacter++;
    //     }
    // }
    // console.log("Uppercase ", uppercase);
    // console.log("Lower Case ", lowerCase);
    // console.log("numbers ", numbers);
    // console.log("Special Characters  ", specialCharacter);
}

var str = "#GeeKs01fOr@gEEks07";
countAllCharacters(str);