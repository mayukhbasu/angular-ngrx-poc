class MaxStack {
    constructor() {
        // Primary stack to store elements
        this.stack = [];
        
        // Auxiliary stack to keep track of the maximum value
        this.maxStack = [];
    }

    // Add an element to the stack and update the max stack
    push(val) {
        this.stack.push(val);
        
        // If the maxStack is empty or the current value is greater than 
        // the top of the maxStack, push the current value onto the maxStack.
        // Otherwise, push the current top of the maxStack (which is the 
        // current maximum) onto the maxStack.
        if (this.maxStack.length === 0 || val > this.maxStack[this.maxStack.length - 1]) {
            this.maxStack.push(val);
        } else {
            this.maxStack.push(this.maxStack[this.maxStack.length - 1]);
        }
    }

    // Remove and return the top element from the stack and update the max stack
    pop() {
        if (this.stack.length === 0) {
            throw new Error("Stack is empty");
        }

        this.maxStack.pop();
        return this.stack.pop();
    }

    // Return the current maximum value
    getMax() {
        if (this.maxStack.length === 0) {
            throw new Error("Stack is empty");
        }

        return this.maxStack[this.maxStack.length - 1];
    }

    // Look at the top value without removing it
    top() {
        if (this.stack.length === 0) {
            throw new Error("Stack is empty");
        }

        return this.stack[this.stack.length - 1];
    }
}

// Example usage:
const maxStack = new MaxStack();
maxStack.push(5);
maxStack.push(2);
console.log(maxStack.getMax());  // Outputs: 5
maxStack.push(10);
console.log(maxStack.getMax());  // Outputs: 10
maxStack.pop();
console.log(maxStack.getMax());  // Outputs: 5
