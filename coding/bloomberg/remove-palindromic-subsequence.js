const removePalindromeSubsequence = (str = '') => {
    let i = 0, j = str.length - 1;
    while(i !== j) {
        if(str.charAt(i++) !== str.charAt(j--)) {
            return 2;
        }
    }
    return 1; 
}