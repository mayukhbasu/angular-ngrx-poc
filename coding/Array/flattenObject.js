const flattenObj = (obj) => {
    const result = {};
    for(const key in obj){
        if(typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
            const temp = flattenObj(obj[key]);
            for(let innerKey in temp){
                result[key+'.'+innerKey] = temp[innerKey];
            }
        } else {
            result[key] = obj[key];
        }
    }
    return result;
//    let result = {};
//    for(const key in obj){
//     if(typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
//         let temp = flattenObj(obj[key]);
//         for(const j in temp){
//             result[key+"."+j] = temp[j];
//         }
//     } else {
//         result[key] = obj[key];
//     }
//    }
//    return result;
    // for(let key in obj){
    //     if(typeof obj[key] === 'object' && !Array.isArray(obj[key])){
    //         let temp = flattenObj(obj[key]);
    //         for(const j in temp){
    //             result[key+"."+j] = temp[j];
    //         }
    //     } else {
    //         result[key] = obj[key]
    //     }
    // }
    // return result
} 
    

let obj = {
    "name": "Mayukh",
    tekken: {
        "character": "Armor king",
        style: {
            hand: "1",
            leg: 2,
            place: {
                state: "Mexico"
            }
        }
    }
}
console.log(flattenObj(obj))
