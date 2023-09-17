const findProductofArray = (arr = []) => {
   let product = 1;
   let maxProduct = -Infinity;
   for(let i = 0; i < arr.length; i++) {
    product *= arr[i];
    maxProduct = Math.max(maxProduct, product);
    if(product === 0) product = 1;
   }
   product = 1;
   for(let i = arr.length - 1; i >= 0; i--) {
    product *= arr[i];
    maxProduct = Math.max(maxProduct, product);
    if(product === 0) product = 1;
   }
   return maxProduct;
}

const arr = [1, -2, -3, 0, 7, -8, -2];
console.log(`Maximum Subarray product is ${findProductofArray(arr)}`);