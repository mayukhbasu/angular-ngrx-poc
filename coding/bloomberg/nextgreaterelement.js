function printNextGreaterElement(arr) {
    let result = [];
    let stack = [];

    for (let i = arr.length - 1; i >= 0; i--) {
        while (stack.length > 0 && stack[stack.length - 1] <= arr[i]) {
            stack.pop();
        }

        if (stack.length === 0) {
            result[i] = -1;
        } else {
            result[i] = stack[stack.length - 1];
        }

        stack.push(arr[i]);
    }

    return result;
}

const arr = [4, 5, 2, 10];
console.log(printNextGreaterElement(arr));  // Output: [ 5, 10, 10, -1 ]
