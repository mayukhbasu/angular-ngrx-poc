const catalanDP = (num) => {
  const catalan = [];
  catalan[0] = catalan[1] = 1;
  for(let i = 2; i <= num; i++) {
    catalan[i] = 0;
    for(let j = 0; j < i; j++) {
      catalan[i] += catalan[j] * catalan[i - j - 1];
    }
  }
  return catalan[num]
}

for (let i = 0; i < 10; i++)
console.log(catalanDP(i) + " ");