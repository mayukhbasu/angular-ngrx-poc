const removeDuplicates = (arr = []) => {
    let count = 0;
    for(let i = 0; i < arr.length; i++) {
      if(arr[i] !== arr[i+1]) {
        arr[count++] = arr[i];
      }
    }
    return arr.slice(0, count);
  }
  
  const arr = [1, 2, 2, 3, 4, 4, 4, 5, 5, 5];
  console.log(removeDuplicates(arr));