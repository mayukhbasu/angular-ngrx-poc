const minRemoveToMakeValid = (str = "") => {
    const charArray = str.split('');
    let count = 0;
    for(let i = 0; i < charArray.length; i++) {
        if(charArray[i] === '(') {
            count++;
        } else if(charArray[i] === ')') {
            if(count <= 0) {
                charArray.splice(i, 1);
                i--;
            } else {
                count--;
            }
        }
    }

    while(count > 0) {
        const index = charArray.lastIndexOf('(');
        charArray.splice(index, 1);
        count--;
    }
    return charArray.join('');
}

const s = "lee(t(c)o)de)";
console.log(minRemoveToMakeValid(s));