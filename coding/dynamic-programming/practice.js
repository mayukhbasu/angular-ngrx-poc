const interleaving = (str1 = '', str2 = '', str3 = '') => {
    const memo = new Map();
    const resolve = (a = 0, b = 0, c = 0) => {
        if(a === str3.length) return b === str1.length && c === str2.length;
        const pos = [a, b, c].join('.');
        if(memo.has(pos)) return memo.get(pos)
    }
}

const s1 = "aa", s2 = "bb", s3 = "abba";
console.log(interleaving(s1, s2, s3));