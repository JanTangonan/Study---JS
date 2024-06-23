//-----------------------------------------------------------------------------------------------------------------------------------//
// Palindrome checker using stock knowledge
//-----------------------------------------------------------------------------------------------------------------------------------//
// let palindrome = 'bagal ng net ko gago di ako makapag valorant o dota!!' ; 
// let string1 = '';


// palindrome = palindrome.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

// for (let i = palindrome.length - 1; i >= 0; i--) {
//     string1 += palindrome[i];
// }

// if (palindrome == string1) {
//     console.log("this string is a palindrome");
// } else {
//     console.log("this string is not a palindrome");
// }

// console.log(palindrome);
// console.log(string1);

//-----------------------------------------------------------------------------------------------------------------------------------//
// Sort using stock knowledge -- ascending to descending 
//-----------------------------------------------------------------------------------------------------------------------------------//
// let myArray = [7, 21, 33, 12, 55, 14, 23, 11, 0, 6, 99];

// // myArray = myArray.sort();
// // console.log(myArray)

// for (let i = 0; i <= myArray.length -1; i ++){
//     for (let j = i + 1; j <= myArray.length; j++) {
//         if (myArray[i] > myArray[j]) {
//             container = myArray[j];
//             myArray[j] = myArray[i]
//             myArray[i] = container;
//         }
//     }
// }

// console.log(myArray);

//-----------------------------------------------------------------------------------------------------------------------------------//
// Sort using stock knowledge -- descending to ascending
//-----------------------------------------------------------------------------------------------------------------------------------//
let myArray = [7, 21, 33, 12, 55, 14, 23, 11, 0, 6, 99];

myArray = myArray.sort();
console.log(myArray)

function sortArr(myArray) {
    for (let i =  myArray.length -1; i >= 0; i --){
        for (let j = myArray.length; j >= i + 1; j--) {
            if (myArray[i] < myArray[j]) {
                container = myArray[j];
                myArray[j] = myArray[i]
                myArray[i] = container;
            }
        }
    }
    return myArray
}

let mergedArr = [...sortArr([7, 21, 33, 12, 55, 14, 23, 11, 0, 6, 99]), ...sortArr([7, 21, 33, 12, 55, 14, 23, 11, 0, 6, 99])]
console.log(mergedArr);
console.log(sortArr(mergedArr));

