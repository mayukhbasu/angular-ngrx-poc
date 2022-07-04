
// JavaScript code to segregate even odd
// numbers in an array

// Function to segregate even odd numbers
const arrayEvenAndOdd = (arr, n) => {
    let i = -1, j = 0;
    while(j <= n){
        if(arr[j] % 2 === 0){
            i++;
            [arr[j], arr[i]] = [arr[i], arr[j]];
        }
        j++;
    }
    console.log(arr);
    // let i = -1, j = 0;
    // while(j <= n) {
    //     if(arr[j] % 2 === 0){
    //         i++;
    //         [arr[i], arr[j]] = [arr[j], arr[i]];
    //     }
    //     j++;
    // }
    // console.log(arr);
}



	let arr = [ 1, 3, 2, 4, 7, 6, 9, 10 ];
	let n = arr.length;
	arrayEvenAndOdd(arr, n);


