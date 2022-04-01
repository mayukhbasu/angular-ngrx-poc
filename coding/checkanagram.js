const checkAnagram = (str1, str2) => {
    if(str1.length !== str2.length){
        return false;
    }
    let arr1 = [];
    let arr2 = [];
    for(let i = 0; i < 256; i++){
        arr1[i] = 0;
        arr2[i] = 0;
    }
    for(let i = 0; i < str1.length; i++){
        arr1[str1.charCodeAt(i)]++;
        arr2[str2.charCodeAt(i)]++;
    }

    for(let i = 0; i < arr1.length; i ++){
        if(arr1[i] !== arr2[i]){
            return false;
        }
    }

    return true;
} 

console.log(checkAnagram("abba", "babax"));