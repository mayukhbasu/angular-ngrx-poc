function partition(arr, low , high) {
    let pivot = arr[high];
    let pivotLocation = low;
    for(let i = low; i <= high; i++) {
        if(arr[i] < pivot){
            [arr[i], arr[pivotLocation]] = [arr[pivotLocation], arr[i]];
            pivotLocation++;
        }
    }
    [arr[high], arr[pivotLocation]] = [arr[pivotLocation], arr[high]];
    return pivotLocation
    // let pivot = arr[high];
    // let pivotLocation = low;
    // for(let i = low; i <= high; i++){
    //     if(arr[i] < arr[pivot]){
    //         [arr[i], arr[pivotLocation]] = [arr[pivotLocation], arr[i]];
    //         pivotLocation++;
    //     }
    // }
    // [arr[pivotLocation], arr[high]] = [arr[high], arr[pivotLocation]];
    // return pivotLocation;
}

function findkthElement(arr, low, high, k) {
    const index = partition(arr, low, high);
    if(index === k - 1) return arr[index];
    if(index > k - 1) {
        return findkthElement(arr, low, index - 1, k);
    }
    // const index = partition(arr, low, high);
    // if(index === k - 1) {
    //     return arr[index];
    // } else if(index < k - 1) {
    //     return findkthElement(arr, index + 1, high, k);
    // } else {
    //     return findkthElement(arr, low, index - 1, k);
    // }
 }


let array = [ 10, 4, 26, 8, 6, 11, 5];
console.log(findkthElement(array, 0, array.length - 1, 2));