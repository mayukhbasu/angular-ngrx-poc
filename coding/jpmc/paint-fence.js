const paintFence = (fences, color) => {
    let same = color * 1;
    let different = color * (color - 1);
    let total = same + different;
    for(let i = 3; i <= fences; i++) {
        same = different * 1;
        different = total * (color - 1);
        total = same + total;
    }
    return total;
}

console.log(paintFence(7,2));