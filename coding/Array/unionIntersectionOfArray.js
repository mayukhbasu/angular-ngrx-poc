function findIntersection(arr1, arr2) {
    let i = 0, j = 0;
    while(i < arr1.length && j < arr2.length) {
        if(arr1[i] < arr2[j]) {
            i++;

        } else if(arr1[i] > arr2[j]) {
            j++;
        } else {
            console.log(arr1[i]);
            i++;
        }
    }
}

function findUnion(arr1, arr2) {
    var m = arr1.length
    var n = arr2.length
 
        var ans = 0;
 
        if (m > n) {
            ans = m;
        } else
            ans = n;
 
        
        var newtable = Array(ans+1).fill(0);
 
        // First element is always
        // present in final answer
        console.log(arr1[0] + " ");
 
        // Incrementing the First element's count
        // in it's corresponding index in newtable
        newtable[arr1[0]]+=1;
 
        // Starting traversing the first
        // array from 1st index till last
        for (var i = 1; i < arr1.length; i++) {
            // Checking whether current element
            // is not equal to it's previous element
            if (arr1[i] != arr1[i - 1]) {
                console.log(arr1[i] + " ");
                newtable[arr1[i]]+= 1;
            }
        }
 
        // Finding only non common
        // elements from 2nd array
        for (var j = 0; j < arr2.length; j++) {
            // By checking whether it's already
            // present in newtable or not
            if (newtable[arr2[j]] == 0) {
                console.log(arr2[j] + " ");
                ++newtable[arr2[j]];
            }
        }
 
}

var arr1 = [ 1, 2, 2, 2, 3 ];
 var arr2 = [ 2, 3, 4, 5 ];
indIntersection(arr1, arr2);
findUnion(arr1, arr2);