class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const addLists = (head1, head2, carry = 0) => {
    if(head1 === null && head2 === null && carry === 0) return null;
    const val1 = head1 === null ? 0 : head1.val;
    const val2 = head2 === null ? 0 : head2.val;
    const sum = val1 + val2 + carry;
    const nextCarry = sum > 9 ? 1 : 0;
    const digit = sum % 10;
    const result = new Node(digit);
    const next1 = head1 === null ? 0 : head1.next;
    const next2 = head2 === null ? 0 : head2.next;
    result.next = addLists(next1, next2, nextCarry);
    return result;
    // if (head1 === null && head2 === null && carry === 0) return null;
    
    // const val1 = head1 === null ? 0 : head1.val;
    // const val2 = head2 === null ? 0 : head2.val;
    
    // const sum = val1 + val2 + carry;
    // const nextCarry = sum > 9 ? 1 : 0;
    // const digit = sum % 10;
    // const result = new Node(digit);
    
    // const next1 = head1 === null ? null : head1.next
    // const next2 = head2 === null ? null : head2.next
    
    // result.next = addLists(next1, next2, nextCarry);
    
    // return result;
};

const a1 = new Node(1);
const a2 = new Node(2);
const a3 = new Node(6);
a1.next = a2;
a2.next = a3;
// 1 -> 2 -> 6

const b1 = new Node(4);
const b2 = new Node(5);
const b3 = new Node(3);
b1.next = b2;
b2.next = b3;
// 4 -> 5 -> 3
console.log(addLists(a1, b1));
addLists(a1, b1);