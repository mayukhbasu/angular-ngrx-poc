//completely for practice


const partition = (arr = [], start, end) => {
  let pivotLocation = start;
  let pivot = arr[end];
  for(let i = start; i <= end; i++) {
    if(arr[i] < pivot) {
      [arr[i], arr[pivotLocation]] = [arr[pivotLocation], arr[i]];
      pivotLocation++;
    }
  }
  [arr[end], arr[pivotLocation]] = [arr[pivotLocation], arr[end]];
  return pivotLocation;
}

const findkthElement = (arr = [], start, end, position) => {
  let index = partition(arr, start, end);
  if(index === position - 1) return arr[index];
  if(index > position - 1) return findkthElement(arr, start, index - 1, position);
  else return findkthElement(arr, index + 1, end, position)
}

let array = [ 10, 4, 26, 8, 6, 11, 5];
console.log(findkthElement(array, 0, array.length - 1, 5));