function isSelfDescriptiveNumber(num) {
    const numArr = [...num].map(Number);
    const count = new Array(numArr.length).fill(0);

    for (let digit of numArr) {
        if (digit < count.length) count[digit]++;
    }

    for (let i = 0; i < numArr.length; i++) {
        if (numArr[i] !== count[i]) return false;
    }
    console.log(count)
    return true;
}

console.log(isSelfDescriptiveNumber("521001000"));
