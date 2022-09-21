const intToRoman = (num) => {
    let result = '';
    const list = [
        ["I", 1],
        ["IV", 4],
        ["V", 5],
        ["IX", 9],
        ["X", 10],
        ["XL", 40],
        ["L", 50],
        ["XC", 90],
        ["C", 100],
        ["CD", 400],
        ["D", 500],
        ["CM", 900],
        ["M", 1000]
    ]
    for(let i = list.length - 1; i >= 0; i--) {
        const [symbol, value] = list[i];
        const count = Math.floor(num / value);
        result += symbol.repeat(count);
        num = num % value;
    }
    return result;
}

const num = 1994;
console.log(intToRoman(num));