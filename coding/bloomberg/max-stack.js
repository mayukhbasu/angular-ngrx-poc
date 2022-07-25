class MaxStack {
    constructor() {
        this.stack = [];
        this.maxStack = [];
    }

    push(x) {
        this.stack.push(x);
        if(!this.maxStack.length) this.maxStack.push(x);
        else this.maxStack.push(Math.max(x, this.maxStack[this.maxStack.length - 1]))
    }
    pop() {
        this.maxStack.pop();
        return this.stack.pop();
    }

    top(){
        return this.stack[this.stack.length - 1];
    }

    peekMax() {
        return this.maxStack[this.maxStack.length - 1];
    }
}