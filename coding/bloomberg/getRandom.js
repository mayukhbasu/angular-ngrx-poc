class RandomSizedSet {
    constructor() {
        this.map = new Map();  // Key: val, Value: index in list
        this.list = [];  // Contains values
    }

    insert(val) {
        // If value exists, return false
        if (this.map.has(val)) return false;

        // Otherwise, insert value to list, and add its position to map
        this.map.set(val, this.list.length);
        this.list.push(val);
        return true;
    }

    remove(val) {
        // If value doesn't exist, return false
        if (!this.map.has(val)) return false;

        // Otherwise, delete value from list by swapping it 
        // with the last element and popping the list.
        const idx = this.map.get(val);
        const last = this.list[this.list.length - 1];
        
        // Swap val with the last element in list
        this.list[idx] = last;
        this.map.set(last, idx);  // Update map with new index of last element

        // Remove val from map and list
        this.map.delete(val);
        this.list.pop();
        return true;
    }

    getRandom() {
        // Fetch random value from list
        return this.list[Math.floor(Math.random() * this.list.length)];
    }
}

describe('RandomSizedSet', () => {
    let set;

    beforeEach(() => {
        set = new RandomSizedSet();
    });

    test('insert() should add a value if not present', () => {
        expect(set.insert(5)).toBe(true);
        expect(set.list).toContain(5);
        expect(set.map.get(5)).toBe(0);
    });

    test('insert() should not add a value if already present', () => {
        set.insert(5);
        expect(set.insert(5)).toBe(false);
    });

    test('remove() should remove a value if present', () => {
        set.insert(5);
        expect(set.remove(5)).toBe(true);
        expect(set.list).not.toContain(5);
        expect(set.map.has(5)).toBe(false);
    });

    test('remove() should not remove a value if not present', () => {
        expect(set.remove(5)).toBe(false);
    });

    test('remove() should handle swapping and removing correctly', () => {
        set.insert(5);
        set.insert(10);
        set.remove(5);
        expect(set.list).not.toContain(5);
        expect(set.list).toContain(10);
        expect(set.map.has(5)).toBe(false);
        expect(set.map.get(10)).toBe(0);
    });

    test('getRandom() should return a value from the set', () => {
        set.insert(5);
        set.insert(10);
        const randomValue = set.getRandom();
        expect([5, 10]).toContain(randomValue);
    });

    test('getRandom() should return undefined if set is empty', () => {
        expect(set.getRandom()).toBeUndefined();
    });
});

