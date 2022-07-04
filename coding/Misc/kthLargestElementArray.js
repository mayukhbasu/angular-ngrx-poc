const partition = (arr, low, high) => {
    let pivot = arr[high];
    let pivotLocation = low;
    for(let i = low; i <= high; i++) {
        if(arr[i] < pivot){
            [arr[i], arr[pivotLocation]] = [arr[pivotLocation], arr[i]];
            pivotLocation++;
        }
    }
    [arr[pivotLocation], arr[high]] = [arr[high], arr[pivotLocation]];
    return pivotLocation;
}

const findKthElement = (arr, low, high, k) => {
    let key = partition(arr, low, high);
    if(key === k - 1) return arr[key];
    if(key < k - 1){
        return findKthElement(arr, key + 1, high, k);
    } else {
        return findKthElement(arr, low, key, k);
    }
}

let array = [ 10, 4, 26, 8, 6, 11, 5];

 console.log(findKthElement(array, 0, array.length - 1, 2));