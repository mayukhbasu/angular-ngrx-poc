class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.map = new Map();
    }
    get(key) {
        if(!this.map.has(key)) return -1;
        const value = this.map.get(key);
        this.map.delete(key);
        this.map.set(key, value);
        return this.map.get(key);
    }

    put(key, value) {
        if(this.map.get(key) === -1) {
            if(this.capacity === this.map.size) {
                this.map.delete(this.map.keys().next().value);
            }
        }
        this.map.set(key, value);
    }
}

const map = new Map();
map.set(1, "hello");
console.log(map.get(2));