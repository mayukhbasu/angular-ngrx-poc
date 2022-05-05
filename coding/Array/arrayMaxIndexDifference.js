function max(x, y) {
    return x> y? x : y;
}

function min(x, y) {
    return x < y ? x: y;
}

function maxIndexDiff(arr, n) {
    let maxDiff;
    let i , j;
    let rMax = new Array(n);
    let lMin = new Array(n);
    lMin[0] = arr[0];
    for(i = 1; i < n; i++) {
        lMin[i] = min(arr[i], lMin[i-1]);
    }
    rMax[n - 1] = arr[n - 1];
    for(j = n - 2; i >= 0; i--) {
        rMax[j] = max(arr[j], rMax(j + 1));
    }
    i = 0, j = 0;
    while(j < n && i < n) {
        if(lMin[i] <= rMax[j]) {
            maxDiff 
        }
    }
}