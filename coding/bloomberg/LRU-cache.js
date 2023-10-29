class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.cache = new Map();
    }

    get(key) {
        if (!this.cache.has(key)) return -1;

        // Move accessed key to the end to show it was recently accessed
        const tempValue = this.cache.get(key);
        this.cache.delete(key);
        this.cache.set(key, tempValue);
        return tempValue;
    }

    put(key, value) {
        // If the key is already in the cache, delete it
        if (this.cache.has(key)) this.cache.delete(key);

        // If cache has reached its capacity, remove the least recently used item
        if (this.cache.size === this.capacity) {
            this.cache.delete(this.cache.keys().next().value);
        }

        this.cache.set(key, value);
    }
}

const cache = new LRUCache(2);
cache.put(1, 1);
cache.put(2, 2);
console.log(cache.get(1)); // returns 1
cache.put(3, 3); // evicts key 2 because it's the least recently used
console.log(cache.get(2)); // returns -1 (not found)
cache.put(4, 4); // evicts key 1
console.log(cache.get(1)); // returns -1 (not found)
console.log(cache.get(3)); // returns 3
console.log(cache.get(4)); // returns 4
