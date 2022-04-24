function computerPlay() {
    let id = Math.random() * 2;
    id = Math.round(id);
    if(id == 0) {
        computer = "rock";
    }
    else if(id == 1) {
        computer = "paper";
    }
    else if(id == 2) {
        computer = "scissors";
    }
    else {
        computer = "error";
    }
    console.log(id);
    return computer;
}

function round(playerSelection, computerSelection){
    if (playerSelection === "paper") {
        if (computerSelection === "paper") {
            return "tie";
        }
        else if (computerSelection === "scissors") {
            return "lose";
        }
        else if (computerSelection === "rock") {
            return "win";
        }
        else {
            return "something's wrong";
        }
    }
    else if (playerSelection === "scissors") {
        if (computerSelection === "paper") {
            return "win";
        }
        else if (computerSelection === "scissors") {
            return "tie";
        }
        else if (computerSelection === "rock") {
            return "lose";
        }
        else {
            return "something's wrong";
        }
    }
    else if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            return "lose";
        }
        else if (computerSelection === "scissors") {
            return "win";
        }
        else if (computerSelection === "rock") {
            return "tie";
        }
        else {
            return "something's wrong";
        }
    }
    else {
        return "something's wrong";
    }
}

// const playerSelection = "rock";
// const computerSelection = computerPlay();
// console.log("player = " + playerSelection);
// console.log("computer = " + computerSelection);
// console.log("result = " + round(playerSelection, computerSelection));

let playerRound = 0;
let computerRound = 0;
let keepgoing = true;
let roundNo = 0;

for (; keepgoing == true; ) {
    if (playerRound == 5 || computerRound == 5 ) {
        keepgoing = false;
        if (playerRound > computerRound) {
            console.log("player wins");
        }
        else {
            console.log("computer wins");
        }
    }
    else {
        keepgoing = true;
        let playerSelection = window.prompt("rock/paper/scissors");
        let computerSelection = computerPlay();
        let result = round(playerSelection, computerSelection);
        if (result == "win") {
            playerRound = ++playerRound;
            roundNo = ++roundNo;
        }
        else if (result == "tie") {
            roundNo = ++roundNo;
        }
        else {
            computerRound = ++computerRound;
            roundNo = ++roundNo;
        }
        console.log("round No: " + roundNo);
        console.log("player = " + playerSelection);
        console.log("computer = " + computerSelection);
        console.log("result = " + result);
        console.log("player current score: " + playerRound + " computer score: " + computerRound);
    }
}