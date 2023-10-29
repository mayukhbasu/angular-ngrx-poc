class MinHeap {
  constructor() {
      this.heap = [];
  }

  insert(notification) {
      this.heap.push(notification);
      this.heapifyUp();
  }

  removeMin() {
      if (this.isEmpty()) {
          return null;
      }

      const min = this.heap[0];
      const lastElement = this.heap.pop();

      if (!this.isEmpty()) {
          this.heap[0] = lastElement;
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

          if (this.heap[currentIndex].timestamp >= this.heap[parentIndex].timestamp) {
              break;
          }

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

          if (leftChildIndex < length && this.heap[leftChildIndex].timestamp < this.heap[smallestIndex].timestamp) {
              smallestIndex = leftChildIndex;
          }

          if (rightChildIndex < length && this.heap[rightChildIndex].timestamp < this.heap[smallestIndex].timestamp) {
              smallestIndex = rightChildIndex;
          }

          if (smallestIndex === currentIndex) {
              break;
          }

          [this.heap[currentIndex], this.heap[smallestIndex]] = [this.heap[smallestIndex], this.heap[currentIndex]];

          currentIndex = smallestIndex;
      }
  }
}

const notificationContainer = document.getElementById('notification-container');
const minHeap = new MinHeap();

function addNotification(message) {
  const timestamp = new Date().getTime();
  const notification = { message, timestamp };
  minHeap.insert(notification);
  displayNotifications();
}

function displayNotifications() {
  notificationContainer.innerHTML = '';

  while (!minHeap.isEmpty()) {
      const notification = minHeap.removeMin();
      const notificationElement = document.createElement('div');
      notificationElement.classList.add('notification');
      notificationElement.textContent = notification.message;
      notificationContainer.appendChild(notificationElement);
  }
}

// Example usage:

addNotification('You have a new follower.');
addNotification('New message received.');
addNotification('Friend request from John.');
