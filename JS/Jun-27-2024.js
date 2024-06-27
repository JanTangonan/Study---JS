//-----------------------------------------------------------------------------------------------------------------------------------//
// Two Pointer Linked List
//-----------------------------------------------------------------------------------------------------------------------------------//

function reverseString(s) {
    let str = s.split('');
    console.log(str);

    let left = 0
    console.log(left);
    let right = str.length - 1
    console.log(right);

    while (left < right) {
        [str[left], str[right]] = [str[right], str[left]]
        left++
        right--
    }

    return str.join('');
}

console.log(reverseString('hello'))

//-----------------------------------------------------------------------------------------------------------------------------------//
// Two Pointer Linked List
//-----------------------------------------------------------------------------------------------------------------------------------//

const nthLastNode = (linkedList, n) => {
  let current = null;
  let tailSeeker = linkedList.head;
  let count = 0;
  while (tailSeeker) {
    tailSeeker = tailSeeker.next;
    if (count >= n) {
      if (!current) {
        current = linkedList.head;
      }
      current = current.next;
    }
    count++
  }
  return current;
}

// As before, it’s possible to find a solution by iterating through the entire list, 
// creating an array representation, and then returning the middle index. But as before, 
// this potentially takes up lots of extra space:

// create array
// while the linked list has not been fully iterated through
//   push the current element onto array
//   move forward one node
// return array[length / 2]
// Instead, we can use two pointers to move through the list. The first pointer takes 
// two steps through the list for every one step that the second takes, so it iterates twice as fast.


// fastPointer = list head
// slowPointer = list head
// while fastPointer is not null
//   move fastPointer forward
//   if the end of the list has not been reached
//     move fastPointer forward again
//     move slowPointer forward
// return slowPointer


// When the first pointer reaches the end of the list, the “slower” second pointer will be pointing 
// to the middle element. Let’s visualize the steps of the algorithm:

// Starting State

// F
// S
// 1  2  3  4  5  6  7
// First Tick

//       F
//    S
// 1  2  3  4  5  6  7
// Second Tick

//             F
//       S
// 1  2  3  4  5  6  7
// Third Tick

//                   F
//          S
// 1  2  3  4  5  6  7
// Final Tick

//                      F
//          S
// 1  2  3  4  5  6  7  null
// As long as we always move the fast pointer first and check to see that it is not null 
// before moving it and the slow pointer again, we’ll exit iteration at the proper time and have a 
// reference to the middle node with the slow pointer.