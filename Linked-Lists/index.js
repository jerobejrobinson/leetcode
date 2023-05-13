function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

const head = new ListNode("red", new ListNode("blue", new ListNode("green")))

function reverseList(head) {
    let [prev, curr, next] = [null, head, null];

    while(curr) {
        next = curr.next;
        curr.next = prev;

        prev = curr;
        curr = next;

    }

    return prev
}

const ln1 = new ListNode(1, new ListNode(2, new ListNode(4)))
const ln2 = new ListNode(1, new ListNode(2, new ListNode(5, new ListNode(6))))

function sortList(ln1, ln2) {
    let head = new ListNode()

    let curr = head
    while(ln1 && ln2) {
        const isLn2Greater = (ln2.val >= ln1.val)
        const isLn2Less = (ln2.val < ln1.val)

        if(isLn2Greater) {
            curr.next = ln1
            ln1 = ln1.next
        }

        if(isLn2Less){
            curr.next = ln2
            ln2 = ln2.next
        }

        curr = curr.next
    }

    curr.next = ln1 || ln2

    return head.next
}

console.log(sortList(ln1, ln2))