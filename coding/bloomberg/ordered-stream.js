const OrderedStream = function(n){
    this.array = [];
    this.position = 0;
}

OrderedStream.prototype.insert = function(idKey, value) {
    this.array[idKey - 1] = value;
    const result = [];
    while(this.array(this.position)) {
        result.push(this.array(this.position ++));
    }
    return result;
}