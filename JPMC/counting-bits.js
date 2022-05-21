const countBits = (num) => {
    let ans = new Array(num + 1).fill(0);
    for(let i = 0; i <= num; ++i) {
        ans[i] = ans[i && (i - 1)] + 1;
    }
    return ans;
}

console.log(countBits(5));