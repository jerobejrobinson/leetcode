class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }

    isActive(selector) {
        if(this.data.classList.contains(selector)) {
            return true
        } else {
            return false
        }
    }

    removeClass(selector) {
        if(this.isActive(selector)) {
            this.data.classList.remove(selector)
        }
    }

    addClass(selector) {
        if(!this.isActive(selector)) {
            this.data.classList.add(selector)
        }
    }
}

// Returns linked list head
function convertArrToCirLinkedList(arr) {
    const linkedList = arr
    // create node out of item item
    .map(item => new Node(item))
    // add next node to current it
    .map((item, index, arr) => {
        const nIndex = index + 1
        if(item.next == null && nIndex < arr.length) {
            item.next = arr[nIndex]
        } else {
            item.next = arr[0]
        }
        return item
    })
    // add the previous node to node
    .map((item, index, arr) => {
        let pIndex = index - 1
        if(item.prev == null && index == 0) {
            item.prev = arr[arr.length - 1]
        } else {
            item.prev = arr[pIndex]
        }
        return item
    })

    return linkedList[0]
}

// Returns Array 
function getElementsByClass(selector) {
    return Array.from(document.querySelectorAll(selector))
}

const Head = convertArrToCirLinkedList(getElementsByClass('.rotate'))

let currentNode = Head;

function handlePrev(node) {
    node.removeClass('active')
    node.prev.addClass('active')
    currentNode = node.prev
}

function handleNext(node) {
    node.removeClass('active')
    node.next.addClass('active')
    currentNode = node.next
}

let prevBtn = document.querySelector('#Prev')
let nextBtn = document.querySelector('#Next')

prevBtn.addEventListener('click', () => handlePrev(currentNode))
nextBtn.addEventListener('click', () => handleNext(currentNode))