/*
Implementing Linkedin List:-
Add Node
Print List
Delete Node
*/

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LL {

    constructor() {
        this.head = null;
    }

    addNode(node) {
        node.next = this.head;
        this.head = node;
    }

    deleteNode(str) {
        console.log('The head is pointing to ', this.head);
        let curr = this.head;
        let temp = curr;
        while ((curr !== null) && (curr.data !== str)) {
            temp = curr;
            curr = curr.next;
        }
        if (curr === null) {
            console.log('No such node to delete');
        } else {
            // console.log(`prev = ${temp.data} and curr = ${curr.data}`);
            if (curr === this.head) {
                this.head = curr.next;
            } else {
                temp.next = curr.next;
            }

        }
    }
    printList() {
        let curr = this.head;
        let str = ''
        while (curr.next !== null) {
            str += ` ${curr.data} -->`
            curr = curr.next;
        }
        str += ` ${curr.data} --> NULL`;
        console.log(str);
    }
}

let ll = new LL();
ll.addNode(new Node(21));
ll.addNode(new Node('ashish'));
ll.addNode(new Node(31));
ll.addNode(new Node('siddhesh'));
ll.addNode(new Node(41));
ll.addNode(new Node('tao'));
ll.addNode(new Node('kao'));

let delTxt;

ll.printList();
delTxt = 'kao';
console.log(`Deleting ${delTxt} ...`)
ll.deleteNode(delTxt);
ll.printList();

delTxt = 'siddhesh';
console.log(`Deleting ${delTxt} ...`)
ll.deleteNode(delTxt);
ll.printList();

delTxt = 21;
console.log(`Deleting ${delTxt} ...`)
ll.deleteNode(delTxt);
ll.printList();

delTxt = 41;
console.log(`Deleting ${delTxt} ...`)
ll.deleteNode(delTxt);
ll.printList();
