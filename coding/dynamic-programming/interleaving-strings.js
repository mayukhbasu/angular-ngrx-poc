const interleaving = (str1 = '', str2 = '', str3 = '') => {
  const memo = new Map();
  const resolve = (a = 0, b = 0, c = 0) => {
    if(c === str3.length) return a === str1.length && b === str2.length;
    const key = [a, b, c].join(',');
    if(memo.has(key)) {
      return memo.get(key);
    }
    let take1 = false, take2 = false;
    if(str1.charAt(a) === str3.charAt(c)) take1 = resolve(a + 1, b, c + 1);
    if(str2.charAt(b) === str3.charAt(c)) take2 = resolve(a , b + 1, c + 1);
    memo.set(key, take1 || take2);
    return take1 || take2;
  }
  return resolve()
}

const s1 = "aa", s2 = "bb", s3 = "abba";
console.log(interleaving(s1, s2, s3));