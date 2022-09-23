const partition = (str) => {
   const result = [];
   const isPalindrome = (str = '') => {
    let start = 0, end = str.length - 1;
    while(start < end) {
        if(str[start] !== str[end]) {
            return false;
        }
        start++; end--;
    }
    return true;
   }

   const helper = (str = '', array = []) => {
    if(str.length === 0 && array.length !== 0) {
        result.push(array);
        return;
    }
    for(let i = 0; i < str.length; i++) {
        const prefix = str.slice(0, i + 1);
        if(isPalindrome(prefix)) {
            helper(str.slice(i + 1), [prefix, ...array])
        }
    }
   }
   helper(str, []);
   return result;
}

const str = "aab";
console.log(partition(str));