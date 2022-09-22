class Node {
    constructor(data) {
        this.data = data;
        this.next = null
    }
}

// Returns linked list head
function convertArrToCirLinkedList(arr) {
    const linkedList = arr
    .map(item => new Node(item))
    .map((item, index, arr) => {
        const nIndex = index + 1
        if(item.next == null && nIndex < arr.length) {
            item.next = arr[nIndex]
            return item
        } else {
            return item.next = arr[0]
        }
    })
    return linkedList[0]
}

// Returns Array 
function getElementsByClass(selector) {
    return Array.from(document.querySelectorAll(selector))
}

const Head = convertArrToCirLinkedList(getElementsByClass('.rotate'))

function slider(head) {
    head.data.classList.add('active')
    setTimeout(() => {
        if(head.next != null) {
            head.data.classList.remove('active')
            slider(head.next)
        }
    },  5000)
}

slider(Head)