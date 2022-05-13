const removeAnagram = (arr) => {
    let map = new Map();
    for(let i = 0; i < arr.length ; i++){
        let sorted = arr[i].split('').sort().join();
        map.set(sorted, arr[i]);
    }
    return Array.from(map.values());
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
console.log(removeAnagram(arr));