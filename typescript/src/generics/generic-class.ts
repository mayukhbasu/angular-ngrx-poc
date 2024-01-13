class GenericStore<T> {
  private data:T[] = [];
  add(item: T): void {
    this.data.push(item);
  }
  get(key: number): T {
    return this.data[key];
  }
  getAll(): T[] {
    return this.data
  }
}

const numberStore = new GenericStore<number>();
numberStore.add(1);
numberStore.add(2);
console.log(numberStore.get(0)); // Output: 1
console.log(numberStore.getAll()); // Output: [1, 2]

// Example usage with string type
const stringStore = new GenericStore<string>();
stringStore.add("Hello");
stringStore.add("World");
console.log(stringStore.get(1)); // Output: "World"
console.log(stringStore.getAll()); // Output: ["Hello", "World"]