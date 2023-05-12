function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next)
}

const head = new ListNode(1)
head.next = new ListNode(2)
head.next.next = new ListNode(3)

function reverseLinkedList(head) {
    let [ prev, curr, next] = [null, head, null]

    // console.log(curr)
    while(curr) {
        next = curr.next;
        curr.next = prev;

        prev = curr;
        curr = next;
    }

    return prev
}

// console.log(head)

console.log(reverseLinkedList(head))