const minSteps = (source = '', target = '') => {
    const count = new Array(26).fill(0);
    for(let i = 0; i < source.length; i++) {
        count[source.charCodeAt(i) - 'a'.charCodeAt(0)]--;
        count[target.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    }
    let res = 0;
    for(let i = 0; i < count.length; i++) {
        if(count[i] > 0){
            res += count[i];
        }
    }
    return res;
}

console.log(minSteps("bab","aba"))