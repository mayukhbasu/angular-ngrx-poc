const printSpriralMatrix = (arr, rowLength, colLength) => {
    let rowStartIndex = 0, rowEndIndex = rowLength - 1, colStartIndex = 0, colEndIndex = colLength - 1;
    while(rowStartIndex <= rowEndIndex && colStartIndex <= colEndIndex) {
        for(let i = colStartIndex; i <= colEndIndex; i++) {
            console.log(arr[rowStartIndex][i]);
        }
        rowStartIndex++;
        for(let i = rowStartIndex ; i <= rowEndIndex; i++) {
            console.log(arr[i][colEndIndex]);
        }
        colEndIndex--;
        for(let i = colEndIndex; i >= colStartIndex; i--) {
            console.log(arr[rowEndIndex][i]);
        }
        rowEndIndex--;
        for(let i = rowEndIndex; i >= rowStartIndex; i--) {
            console.log(arr[i][colStartIndex]);
        }
        colStartIndex++;
    }
}


let arr = [ [1, 2, 3, 4],
            [5, 6, 7, 8],
            [9, 10, 11, 12],
            [13, 14, 15, 16]]
let rowLength = arr.length;
let colLength = arr[0].length;
printSpriralMatrix(arr, rowLength, colLength);