const areMapsEqual = (map1 = new Map(), map2 = new Map()) => {
  for(let [key, value] of map1) {
    if(!map2.get(key) || map2.get(key) !== value) return false;
  }
  return true;
}

const map1 = new Map().set('a', 1).set('b', 2);
const map2 = new Map().set('a', 1).set('b', 4);

console.log(areMapsEqual(map1, map2));  // true