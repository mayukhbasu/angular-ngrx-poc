function alternateSort(arr, n) {
   arr.sort((a, b) => a - b);
   const results = [];
   let i = 0, j = arr.length - 1;
   while(i <= j) {
    results.push(arr[i++]);
    results.push(arr[j--]);
   }
   if(n % 2 !== 0) {
    results.push(arr[i]);
   }
   console.log(results);
}
var arr = [1, 12, 4, 6, 7, 10];
var n = arr.length;
alternateSort(arr, n);