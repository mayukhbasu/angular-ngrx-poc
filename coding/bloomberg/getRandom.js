class RandomSizedSet {
    constructor(){
        this.map = new Map();
        this.list = [];
    }

    insert(val) {
        if(this.map.has(val)) return false;
        this.map.set(val, this.list.length);
        this.list.push(val);
        return true;
        // if(this.map.has(val)) return false;
        // this.map.set(val, this.list.length);
        // this.list.push(val);
        // return true;
    }

    remove(val) {
        if(!this.map.has(val)) return false;
        const idx = this.map.get(val);
        this.swap(idx, this.list.length - 1);
        this.list.pop();
        this.map.set(this.list[idx], idx);
        this.map.delete(val);
        return true;
        // if(!this.map.has(val)) return false;
        // const idx = this.map.get(val);
        // this.swap(idx, this.list.length - 1);
        // this.list.pop();
        // this.map.set(this.list[idx], idx);
        // this.map.delete(val);
        // return true;
    }

    swap(index1, index2) {
        [this.list[index1], this.list[index2]] = [this.list[index2], this.list[index1]];
        // [this.list[index1], this.list[index2]] = [this.list[index2], this.list[index1]];
    }

    getRandom() {
        return this.list[Math.floor(Math.random() * this.list.length)];
        // return this.list[Math.floor(Math.random() * this.list.length)]
    }
}