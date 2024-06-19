//-----------------------------------------------------------------------------------------------------------------------------------//
// Learning While Loops using Math.Floor and Logical Operators -- Decimal to Binary
//-----------------------------------------------------------------------------------------------------------------------------------//
let myNumber = 123;
let binary = "";

while (myNumber != 0) {
  if (myNumber % 2 == 1){
    binary += "1"
  }
  else {
    binary += "0"
  }

  myNumber = Math.floor(myNumber / 2)
}

let finalBinary = ""
for (let i = binary.length - 1; i >= 0; i--) {
  finalBinary += binary[i];
}

console.log(myNumber)
console.log(binary)
console.log(finalBinary)

//-----------------------------------------------------------------------------------------------------------------------------------//
// Learning Nodes using module.exports = Node and OOP
//-----------------------------------------------------------------------------------------------------------------------------------//
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

const firstNode = new Node(12)
console.log(firstNode.data)
console.log(firstNode.next)

module.exports = Node;

//-----------------------------------------------------------------------------------------------------------------------------------//
// Learning Nodes using module.exports = Node and OOP
//-----------------------------------------------------------------------------------------------------------------------------------//
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }

  setNextNode (node){
    this.next = node;
  }
}

const firstNode = new Node('I am an instance of a Node!');

module.exports = Node;

//-----------------------------------------------------------------------------------------------------------------------------------//
// Learning Nodes using module.exports = Node Methods: Set Next Node
//-----------------------------------------------------------------------------------------------------------------------------------//
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }

  setNextNode (node){
    this.next = node;
  }

}

const firstNode = new Node('I am an instance of a Node!');
const secondNode = new Node('I am second instance of a Node!');

firstNode.setNextNode(secondNode)

console.log(firstNode);
module.exports = Node;

//-----------------------------------------------------------------------------------------------------------------------------------//
// Learning Nodes using module.exports = Node Methods: Set Next Node Validation
//-----------------------------------------------------------------------------------------------------------------------------------//
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }

  setNextNode(node) {
    if (node instanceof Node || node === null){
      this.next = node;
    } 
    else {
      throw new Error('Error');
    }
  }
}

const firstNode = new Node('I am an instance of a Node!');
firstNode.setNextNode(secondNode)

module.exports = Node;

//-----------------------------------------------------------------------------------------------------------------------------------//
// Learning Nodes using module.exports = Node Methods: Get Next Node
//-----------------------------------------------------------------------------------------------------------------------------------//
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }

  setNextNode(node) {
    if (node instanceof Node || node === null) {
      this.next = node;
    } else {
      throw new Error('Next node must be a member of the Node class.');
    }
  }
  
  getNextNode(){
    return this.next;
  }
}

const firstNode = new Node('I am an instance of a Node!');
const secondNode = new Node('I am the next Node!');
firstNode.setNextNode(secondNode);

console.log(firstNode.getNextNode())

module.exports = Node;

//-----------------------------------------------------------------------------------------------------------------------------------//
// Learning Nodes using module.exports = Node Methods: Get Next Node
//-----------------------------------------------------------------------------------------------------------------------------------//
