function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next)
}

const x = new ListNode(1, new ListNode(2, new ListNode(4, new ListNode(5))))
const y = new ListNode(1, new ListNode(9, new ListNode(10, new ListNode(11))))

function mergeTwoLists(listOne, listTwo) {
    const sentinel = tail = new ListNode()

    while(listOne && listTwo) {
        const isListTwoGreater = listOne.val <= listTwo.val;
        const isListTwoLess = listTwo.val < listOne.val

        if(isListTwoGreater) {
            tail.next = listOne;
            listOne = listOne.next;
        }

        if(isListTwoLess) {
            tail.next = listTwo;
            listTwo = listTwo.next
        }

        tail = tail.next
    }

    tail.next = listOne || listTwo

    return sentinel.next
}

console.log(mergeTwoLists(x, y))