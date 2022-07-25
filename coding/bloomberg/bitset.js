class Bitset {
    constructor(size) {
        this.zeroSet = new Set(new Array(size).fill().map((_, i) => i));
        this.oneSet = new Set();
        this.size = size;
    }
    fix(idx){
        if(!this.oneSet.has(idx)) {
            this.oneSet.add(idx);
            this.zeroSet.delete(idx);
        }
    }
    unfix(idx) {
        if(!this.zeroSet.has(idx)) {
            this.zeroSet.add(idx);
            this.oneSet.delete(idx);
        }
    }
    flip() {
        [this.zeroSet, this.oneSet] = [this.oneSet, this.zeroSet];
    }

    all() {
        return this.oneSet.size === this.size;
    }

    one() {
        return this.oneSet.size > 0;
    }
    count() {
        return this.oneSet.size;
    }

    toString() {
        const result = [];
        for(let i = 0; i < this.size; i++) {
            if(this.oneSet.has(i)) result.push("1");
            else result.push("0");
        }
        return result.join("");
    }
}