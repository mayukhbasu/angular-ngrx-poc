// function partition (arr, low, high) {
//     let pivotlocation = low;
//     let pivot = arr[high];
//     for(let i = low; i <= high; i ++) {
//         if(arr[i] < pivot) {
//             [arr[i], arr[pivotlocation]] = [arr[pivotlocation], arr[i]];
//             pivotlocation ++;
//         }
//     }
//     [arr[high], arr[pivotlocation]] = [arr[pivotlocation], arr[high]];
//     return pivotlocation;
// }

// function findkthElement(arr, low, high, k) {
//     let index = partition(arr, low, high);
//     if(index == k - 1) {
//         return arr[index];
//     } else if(index > k - 1) {
//         return findkthElement(arr, low, index - 1, k);
//     } else {
//         return findkthElement(arr, index + 1, high, k);
//     }
// }
function partition(arr, high , low) {
    let pivot = arr[high];
    let pivotLocation = low;
    for(let i = low; i <= high; i++) {
        if(arr[i] < pivot) {
            [arr[i], arr[pivotLocation]] = [arr[pivotLocation], arr[i]];
            pivotLocation ++;
        }
    }
    [arr[high], arr[pivotLocation]] = [arr[pivotLocation], arr[high]];
    return pivotLocation;
}

function findkthElement(arr, low, high, k) {
    const index = partition(arr, low, high);
    if(index === k - 1) {
        return arr[index];
    } else if(index < k - 1) {
        return findkthElement(arr, index + 1, high, k);
    } else {
        return findkthElement(arr, low, index - 1, k)
    }
}

let array = [ 10, 4, 5, 8, 6, 11, 26];
console.log(findkthElement(array, 0, array.length - 1, 4));