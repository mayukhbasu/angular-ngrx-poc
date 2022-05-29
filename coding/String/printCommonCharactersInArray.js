function printCommon(str1, str2) {
    let charArray1 = str1.split("").sort();
    let charArray2 = str2.split("").sort();
    let result = "";
    let i = 0, j = 0;
    while(i < charArray1.length && j < charArray2.length){
        if(charArray1[i] < charArray2[j]) {
            i++;
        } else if(charArray1[i] > charArray2[j]) {
            j++;
        } else {
            result += charArray1[i];
            i++;
            j++;
        }
    }
    console.log(result);
    return result;
    
}

let s1 = "geeksforgeeks", s2 = "practiceforgeeks";
printCommon(s1, s2);