const isInvalid = (transaction, hashMap) => {
    const [name, time, amount, city] = transaction.split(',');
    if(amount > 1000) return true;
    const prevTransactions = hashMap[name];
    for(let transaction of prevTransactions) {
        if(city !== transaction.city && Math.abs(time - transaction.time) <= 60) return true;
    }
    return false;
    // const [name, time, amount, city] = transaction.split(',');
    // if(amount > 1000) return true;
    // const prevTransactions = hashMap[name];
    // for(const transaction of prevTransactions) {
    //     if(city !== transaction.city && Math.abs(time - transaction.time) <= 60) return true;
    // }
    // return false;
}

const invalidTransactions = (transactions) => {
    const invalid = [];
    const map = {};
    for(let transaction of transactions) {
        const [name, time, amount, city] = transaction.split(',');
        if(name in map){
            map[name].push({time, city});
        } else {
            map[name] = [{time, city}];
        }
        for(let transaction of transactions){
            if(isInvalid(transaction, map)) invalid.push(transaction);
        }
        return invalid;
    }
    // const invalid = [];
    // const hashMap = {};
    // for(const transaction of transactions) {
    //     const [name, time, amount, city] = transaction.split(',');
    //     if(name in hashMap) hashMap[name].push({time, city});
    //     else {
    //         hashMap[name] = [{time, city}];
    //     }
    // }
    // for(const trans of transactions) {
    //     if(isInvalid(trans, hashMap)) invalid.push(trans);
    // }
    // return invalid;
}