const compact = (obj) => {
  if(obj === null || typeof obj !== 'object') return obj;
  if(Array.isArray(obj)) return obj.map((element) => compact(element)).filter(Boolean);
  else {
    const result = {};
    for(let key in obj) {
      if(Boolean(obj[key])) {
        result[key] = compact(obj[key]);
      }
    }
    return result;
  }
}

console.log(compact({ a: 0, b: { c: '', d: 'test', e: null, f: { g: false, h: 'value' } }, 
i: [1, 0, false, '', 'yes']}));
// Expected output: { b: { d: 'test', f: { h: 'value' } }, i: [1, 'yes'] }