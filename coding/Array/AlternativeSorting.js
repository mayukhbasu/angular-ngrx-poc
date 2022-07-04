function alternateSort(arr, n) {
   arr.sort((a, b) => a - b);
   let i = 0, j = n - 1;
   let results = [];
   while(i <= j){
    results.push(arr[i++]);
    results.push(arr[j--]);
   }
   if(n % 2 !== 0) results.push(arr[i]);
   console.log(results);
    // arr.sort((a, b) => a - b);
    // let results = [];
    // let i = 0, j = n - 1;
    // while(i <= j) {
    //     results.push(arr[i++]);
    //     results.push(arr[j--])
        
    // }
    // if(n % 2 !== 0){
    //     results.push(arr[i]);
    // }
    // console.log(results);
}
var arr = [1, 12, 4, 6, 7, 10];
var n = arr.length;
alternateSort(arr, n);