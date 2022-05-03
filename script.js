function computerPlay() {
    let id = Math.random() * 2;
    id = Math.round(id);
    if (id == 0) {
        computer = "rock";
    }
    else if (id == 1) {
        computer = "paper";
    }
    else if (id == 2) {
        computer = "scissors";
    }
    else {
        computer = "error";
    }
    return computer;
}

function round(playerSelection, computerSelection) {
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

let computerSelection = computerPlay();
let result = "inot";
let playerSelection = "inot"

function checkresult(playerRound, computerRound) {
    if (playerRound == 5 || computerRound == 5) {
        keepgoing = false;
        if (playerRound > computerRound) {
            let newline = document.createElement('h1');
            newline.textContent = "PLAYER WINS"
            results.appendChild(newline);
        }
        else {
            let newline = document.createElement('h1');
            newline.textContent = "COMPUTER WINS"
            results.appendChild(newline);
        }
    }
    else {
        keepgoing = true;
    }
}

buttons = document.querySelectorAll('.input')
results = document.querySelector('#results')

//    let result = round(playerSelection, computerSelection);
function roundcount(result) {
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
    let newline = document.createElement('p');
    newline.textContent = (
        "Round No: " + roundNo + "\r\nplayer = " + playerSelection +
        "\r\ncomputer = " + computerSelection +
        "\r\nresult = " + result +
        "\r\nplayer current score: " + playerRound + "\r\ncomputer score: " + computerRound
    )
    newline.setAttribute('style', 'white-space: pre;');
    results.appendChild(newline);
}

buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        console.log(btn.id)
        playerSelection = btn.id;
        result = round(btn.id, computerPlay())
        roundcount(result);
        checkresult(playerRound, computerRound);
    })
})