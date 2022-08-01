
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
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
        var list = new ListNode(0);
        while(s1.length > 0 || s2.length > 0) {
            if(s1.length > 0) sum += s1.pop();
            if(s2.length > 0) sum += s2.pop();
            list.val = sum % 10;
            var head = new ListNode(Math.floor(sum / 10));
            head.next = list;
            list = head;
            sum = (Math.floor(sum / 10));
        }
        return list.val === 0 ? list.next : list;    
};
l1 = [2,4,3], l2 = [5,6,4];
console.log(addTwoNumbers(l1, l2));