
	
	
function  minAbsSumPair(arr, n) {
    if( n < 2){
        return;
    }
    arr.sort((a,b) => a - b);
    let left = 0, right = n - 1, sum = 0, min_sum = Number.MAX_VALUE;
    let min_left = left, min_right = right;
    while( left < right) {
        sum = Math.abs(arr[left] + arr[right]);
        if(sum < min_sum) {
            min_sum = sum;
            min_left = left;
            min_right = right;
        }
        if(sum < 0) {
            left ++;
        } else {
            right --;
        }
    }
    console.log(arr[min_left]+"  "+arr[min_right])
}

let arr = [ 1, 60, -10, 70, -80, 2, -5, -4, 85 ];
let n = arr.length;
minAbsSumPair(arr, n);

	


