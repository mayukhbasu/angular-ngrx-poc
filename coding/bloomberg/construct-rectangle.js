const constRectangle = (area) => {
    let width = Math.floor(Math.sqrt(area));
    while(width > 0) {
        const length = area /width;
        if(Number.isInteger(length)){
            return [length, width];
        }
        width --;
    }
}

let area = 122122;
console.log(constRectangle(area));