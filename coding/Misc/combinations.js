function createCombinations(arr, n) {
   const result = [];

   function combine(start, prefix) {
       if (n === prefix.length) {
           result.push(prefix);
           return;
       }

       for (let i = start; i < arr.length; i++) {
           combine(i + 1, prefix.concat(arr[i]));
       }
   }

   combine(0, []);
   return result;
}


console.log(createCombinations(["a", "b", "c", "d", "e"], 3));