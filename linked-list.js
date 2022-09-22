class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

const Head = new Node("Jerobe")
const Second = new Node("Jamel")
const Third = new Node("Robinson")

Head.next =  Second;
Second.next = Third;
Third.next = Head

function display(head) {
    console.log(head.data)
    setTimeout(() => {
        if(head.next != null) {
            display(head.next)
         }
    }, 100)
}

display(Head)