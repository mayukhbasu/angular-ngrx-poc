const mergetwoSortedArray = (arr1, arr2) => {
    let arr3 = [];
    let i = 0, j = 0, k = 0;
    while(i < arr1.length && j < arr2.length){
        if(arr1[i] < arr2[j]){
            arr3[k++] = arr1[i++];
        } else {
            arr3[k++] = arr2[j++];
        }
    }

    while( i < arr1.length){
        arr3[k++] = arr1[i++];
    }

    while( j < arr2.length){
        arr3[k++] = arr2[j++];
    }
    console.log(arr3);
}

var arr1 = [ 1, 3, 5, 7 ];
var arr2 = [ 2, 4, 6, 8 ];
mergetwoSortedArray(arr1, arr2);