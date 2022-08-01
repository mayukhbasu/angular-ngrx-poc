class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// const addLists = (head1, head2, carry = 0) => {
//     if(head1 === null && head2 === null && carry === 0) return null;
//     const val1 = head1 === null ? 0 : head1.val;
//     const val2 = head2 === null ? 0 : head2.val;
//     const sum = val1 + val2 + carry;
//     const nextCarry = sum > 9 ? 1 : 0;
//     const digit = sum % 10;
//     const result = new Node(digit);
//     const next1 = head1 === null ? 0 : head1.next;
//     const next2 = head2 === null ? 0 : head2.next;
//     result.next = addLists(next1, next2, nextCarry);
//     return result;
// };
var addTwoNumbers = function(l1, l2) {
    var s1 = [];
    var s2 = [];

    while(l1 !== null) {
        s1.push(l1.val);
        l1 = l1.next;
    }
    while(l2 !== null) {
        s2.push(l2.val);
        l2 = l2.next;
    }
    
    var sum = 0;
    var list = new Node(0);
    while(s1.length > 0 || s2.length > 0) {
        if(s1.length > 0) sum += s1.pop();
        if(s2.length > 0) sum += s2.pop();
        list.val = sum % 10;
        var head = new Node((sum / 10)>>0);
        head.next = list;
        list = head;
        sum = (sum / 10) >> 0;
    }
    return list.val === 0 ? list.next : list;    
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
console.log(addTwoNumbers(a1, b1));
//
addLists(a1, b1);