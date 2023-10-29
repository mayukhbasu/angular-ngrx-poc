const flattenObj = (obj) => {
    const results = {};
    for(const key1 in obj) {
        if(typeof obj[key1] === 'object' && !Array.isArray(obj[key1])) {
            const temp = flattenObj(obj[key1]);
            for(let key2 in temp) {
                results[key1 + '.'+ key2] = temp[key2];
            }
        } else {
            results[key1] = obj[key1];
        }
    }
    return results;
} 
    

let obj = {
    "name": "Max",
    game: {
        "character": "Ling",
        style: {
            hand: "1",
            leg: 2,
            place: {
                state: "Mexico"
            }
        }
    }
}

let obj1 = {
    "name": "Max",
    "play": {
        style: {
            hand: "1",
            leg: 2,
            place: {
                state: "Mexico"
            } 
        }
    }
}
console.log(flattenObj(obj1))
