//-----------------------------------------------------------------------------------------------------------------------------------//
// U P D A T E D    N O D E   C L A S S
//-----------------------------------------------------------------------------------------------------------------------------------//

// class Node {
//     constructor(data) {
//       this.data = data;
//       this.next = null;
//       this.previous = null;              // Added previous property
//     }
  
//     setNextNode(node) {
//       if (node instanceof Node || node === null) {
//         this.next = node;
//       } else {
//         throw new Error('Next node must be a member of the Node class')
//       }
//     }
  
//     setPreviousNode(node) {              // Added set previous property
//       if (node instanceof Node || node === null) {
//         this.previous = node;
//       } else {
//         throw new Error('Previous node must be a member of the Node class')
//       }
//     }
  
//     getNextNode() {
//       return this.next;
//     }

const Node = require('./Node');

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  
  // Create your .addToHead() method below:
  addToHead(data){
    const newHead = new Node(data)
    const currentHead = this.head;
    if (currentHead) {
      currentHead.setPreviousNode(newHead);
      newHead.setNextNode(currentHead)
    }
    this.head = newHead;
    if (!this.tail) {
      this.tail = newHead;
    }
  }
  
  printList() {
    let currentNode = this.head;
    let output = '<head> ';
    while (currentNode !== null) {
      output += currentNode.data + ' ';
      currentNode = currentNode.getNextNode();
    }
    output += '<tail>';
    console.log(output);
  }
}

module.exports = DoublyLinkedList;