function countRotations(arr, n)
{     
    let low = 0, high = n - 1;
    while(low <= high) {
        
    }
    //   let low =0 , high = n-1;
    //   while(low<=high){
    //       let mid = low + Math.floor((high-low)/2) ;
    //       let prev = (mid-1 + n)  %n , next = (mid+1)%n;//if first element is mid or
    //     //last element is mid then simply use modulo so it never goes out of bound.
    //       if(arr[mid]<=arr[prev] && arr[mid]<=arr[next])
    //         return mid;
    //       else if (arr[mid]<=arr[high])
    //         high = mid-1 ;
    //       else if (arr[mid]>=arr[low])
    //         low=mid+1;
    //   }
    //   return 0;
    
}
 
// Driver code
 
let arr = [15, 16, 18, 2, 3, 6, 12];
let n = arr.length;
countRotations(arr, n)
console.log(countRotations(arr, n));
 