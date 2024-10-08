window.alert("Can we play a rock paper scissor game!?");

// Function to get valid user input
function getUserInput() {
    let input;
    do {
        input = window.prompt("Please enter rock, paper, or scissor:").trim().toLowerCase();
        if (input !== "rock" && input !== "paper" && input !== "scissor") {
            console.log("Invalid input. Please enter 'rock', 'paper', or 'scissor'.");
        }
    } while (input !== "rock" && input !== "paper" && input !== "scissor");
    return input;
}

let input = getUserInput(); // Get valid user input


randomnumber = Math.floor(Math.random() * 3) + 1 ;
console.log(randomnumber);
let computerChoice;

if (randomnumber === 1) {
    computerChoice = 'rock';
} 

else if (randomnumber === 2) {
    computerChoice = 'paper';
} 

else if(randomnumber === 3){
    computerChoice = 'scissor';
}

if (input === computerChoice){
    console.log(`Game tied !`);
}

else if (input == `rock` && computerChoice == 'paper' ) {
    console.log(`Computer wins`);
   
}

else if (input === `rock` && computerChoice ==='scissor'){
    console.log(`You win!`);
}

else if (input === `paper` && computerChoice ==='rock'){
    console.log(`You win!`);
}

else if (input === `paper` && computerChoice === 'scissor'){
    console.log(` Computer Wins`);
}

else if (input === `scissor` && computerChoice === 'rock'){
    console.log(` Computer Wins`);
}

else if (input === `scissor` && computerChoice === 'paper' ){
    console.log(`You Win!`);
}



