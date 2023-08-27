const flattenObj = (obj = {}) => {
  const result = {};
  for(const key1 in obj) {
    if(typeof obj[key1] === 'object' && !Array.isArray(obj[key1])) {
      const temp = flattenObj(obj[key1]);
      for(const key2 in temp) {
        result[key1 + '.'+key2] = temp[key2];
        console.log(result[key1 + '.'+key2])
      }
    } else {
      result[key1] = obj[key1];
    }
  }
  return result;
}

let obj = {
  "name": "Mayukh",
  tekken: {
      "character": "Armor king",
      style: {
          hand: "1",
          leg: 2,
          place: {
              state: "Mexico"
          }
      }
  }
}
console.log(flattenObj(obj))