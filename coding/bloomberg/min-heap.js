class MinHeap {
  constructor() {
    this.heap = [];
  }

  insert(value) {
    // Add the new element to the end of the array
    this.heap.push(value);

    // Perform the "heapify up" operation to maintain the min-heap property
    this.heapifyUp();
  }

  removeMin() {
    if (this.isEmpty()) {
      return null;
    }

    // Replace the root (minimum) element with the last element
    const min = this.heap[0];
    const lastElement = this.heap.pop();

    if (!this.isEmpty()) {
      this.heap[0] = lastElement;
      // Perform the "heapify down" operation to maintain the min-heap property
      this.heapifyDown();
    }

    return min;
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  heapifyUp() {
    let currentIndex = this.heap.length - 1;
    while (currentIndex > 0) {
      const parentIndex = Math.floor((currentIndex - 1) / 2);

      if (this.heap[currentIndex] >= this.heap[parentIndex]) {
        break; // Min-heap property is maintained
      }

      // Swap the current element with its parent
      [this.heap[currentIndex], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[currentIndex]];

      currentIndex = parentIndex;
    }
  }

  heapifyDown() {
    let currentIndex = 0;
    const length = this.heap.length;

    while (true) {
      const leftChildIndex = 2 * currentIndex + 1;
      const rightChildIndex = 2 * currentIndex + 2;
      let smallestIndex = currentIndex;

      if (
        leftChildIndex < length &&
        this.heap[leftChildIndex] < this.heap[smallestIndex]
      ) {
        smallestIndex = leftChildIndex;
      }

      if (
        rightChildIndex < length &&
        this.heap[rightChildIndex] < this.heap[smallestIndex]
      ) {
        smallestIndex = rightChildIndex;
      }

      if (smallestIndex === currentIndex) {
        break; // Min-heap property is maintained
      }

      // Swap the current element with the smallest child
      [this.heap[currentIndex], this.heap[smallestIndex]] = [this.heap[smallestIndex], this.heap[currentIndex]];

      currentIndex = smallestIndex;
    }
  }
}

// Example usage:
const minHeap = new MinHeap();
minHeap.insert(4);
minHeap.insert(2);
minHeap.insert(8);
minHeap.insert(1);
minHeap.insert(6);

console.log(minHeap.removeMin()); // Output: 1
console.log(minHeap.removeMin()); // Output: 2
