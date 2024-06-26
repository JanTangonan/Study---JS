//node1 to its next node:

function swapNodes(list, data1, data2) {
  let node1 = list.head;
  let node2 = list.head;
  let node1Prev = null;
  let node2Prev = null;

  while (node1 !== null) {            // this is to check node1.data is equal to data1 
    if (node1.data === data1) {
      break;
    }
    node1Prev = node1;                // if no equal then traverse to the next node
    node1 = node1.getNextNode();
  } 

  while (node2 !== null) {
    if (node2.data === data2) {
      break;
    }
    node2Prev = node2;
    node2 = node2.getNextNode();
  }

  if (node1Prev === null) {
    list.head = node2;
  } else {
    node1Prev.setNextNode(node2);
  }

  if (node2Prev === null) {
    list.head = node1;
  } else {
    node2Prev.setNextNode(node1);
  }

  let temp = node1.getNextNode();
  node1.setNextNode(node2.getNextNode());
  node2.setNextNode(temp); 
}