// https://leetcode.com/problems/reverse-linked-list/

/*

    Imagine theres a line of people waiting to get seen at the doctor.
    In a normal line, the next person to get seen is right after the the current person at the doctor.
    We can call this person by saying NEXT! Then that person will be seen by the doctor.
    This can happen so on and so on. By calling NEXT! we can get the Third person in line. 
    This is similar to what you would call a linked list. By calling NEXT! we can get the next value, from the current person.

    But what happens if we need to reverse this line? How can we do that in a real world scenerio this easy to do because people are people.
    But how do we tell a computer to do this?

*/
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next)
}

const head = new ListNode(1, new ListNode(2, new ListNode(3)))

function reverseLinkedList(head) {
    let [ prev, curr, next] = [null, head, null]

    while(curr) {
        next = curr.next;
        curr.next = prev;

        prev = curr;
        curr = next;
    }

    return prev
}

// 1 -> 2 -> 3 -> null
// 3 -> 2 -> 1 -> null

console.log(reverseLinkedList(head))