class MinStack {
    constructor(capacity) {
        this.stack = [];
        this.capacity = capacity;
    }

    push(value) {
        const min = this.stack.length === 0? val : this.stack[this.stack.length - 1].min;
        this.stack.push({value, min: Math.min(value, min)});
    }

    pop() {
        return this.stack.pop();
    }

    getMin() {
        return this.stack[this.stack.length - 1].min;
    }

    top() {
        return this.stack[this.stack.length - 1].value;
    }

}