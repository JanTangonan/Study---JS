//-----------------------------------------------------------------------------------------------------------------------------------//
// learning conditional operators and math.random
//-----------------------------------------------------------------------------------------------------------------------------------//

// let aqi = Math.floor(Math.random() * 301);


// if (aqi <= 50){
//   console.log("Good")
// } else if (aqi >= 51 && aqi <=100){
//   console.log("Moderate")
// } else if (aqi >= 101 && aqi <=150){
//   console.log("Unhealthy (Sensitive Groups)")
// } else if (aqi >= 151 && aqi <=200){
//   console.log("Unhealthy")
// } else if (aqi >= 201 && aqi <=300){
//   console.log("Very Unhealthy")
// } else {
//   console.log("Hazardous")
// }

// console.log(aqi)

//-----------------------------------------------------------------------------------------------------------------------------------//
// creating rock paper scissor game using math random and conditional operators
//-----------------------------------------------------------------------------------------------------------------------------------//

let player = Math.floor(Math.random() * 3);
let computer = Math.floor(Math.random() * 3);

if (player == 2 && computer == 0){                  // game conditions
    console.log("Player wins")
} else if (player == 0 && computer == 2){
    console.log("Computer wins") 
} else if (player < computer) {
    console.log("Player wins")
} else if (player > computer){
    console.log("Computer wins")
} else if (player == computer){
    console.log("Draw !")
}

if (player == 0){                                   // display 
    console.log("Player picked:      Rock")
} else if (player == 1){
    console.log("Player picked:      Scissor")
} else {
    console.log("Player picked:      Paper")
}

if (computer == 0){
    console.log("Computer picked:      Rock")
} else if (computer == 1){
    console.log("Computer picked:      Scissor")
} else {
    console.log("Computer picked:      Paper")
}

console.log("player: ", player, " ", "Computer: ", computer)