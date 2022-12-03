function getComputerChoice() {
  let num = Math.floor(Math.random() * 3 + 1);
  if (num === 1) {
    return "ROCK";
  } else if (num === 2) {
    return "PAPER";
  } else {
    return "SCISSORS";
  }
}

function getPlayerChoice(pick) {
  pick = prompt("Please choose one! [ROCK | PAPER | SCISSORS]");
  let choice = pick.toUpperCase();
  if (choice !== "ROCK" && choice !== "PAPER" && choice !== "SCISSORS") {
    alert("Please try again and hit refresh");
  } else {
    return choice;
  }
}

function playRound() {
  let computerSelection = getComputerChoice();
  let playerSelection = getPlayerChoice();
  if (
    (playerSelection === "ROCK" && computerSelection === "SCISSORS") ||
    (playerSelection === "PAPER" && computerSelection === "ROCK") ||
    (playerSelection === "SCISSORS" && computerSelection === "PAPER")
  ) {
    return `    Player: ${playerSelection} 
    Computer: ${computerSelection}.
    Congrats, PLAYER! You WON this round.`;
  } else if (playerSelection === computerSelection) {
    return `    Player: ${playerSelection} 
    Computer: ${computerSelection}.
    DRAW!`;
  } else {
    return `    Player: ${playerSelection} 
    Computer: ${computerSelection}.
    Congrats, COMPUTER! You WON this round.`;
  }
}

function game() {
  let playerWin = 0;
  let cpuWin = 0;
  let draws = 0;

  for (let i = 1; i <= 5; i++) {
    let playGame = playRound();
    console.log(`Round: ${i}`);
    console.log(playGame);
    console.log("--------------------|&&|--------------------");

    if (playGame.includes("PLAYER")) {
      playerWin++;
    } else if (playGame.includes("COMPUTER")) {
      cpuWin++;
    } else {
      draws++;
    }
  }

  console.log("FINAL RESULT:");
  console.log(`Player Win: ${playerWin}`);
  console.log(`Computer Win: ${cpuWin}`);
  console.log(`Draws: ${draws}`);

  if (playerWin > cpuWin) {
    console.log("Final Result: Player WON the GAME!");
  } else if (playerWin < cpuWin) {
    console.log("Final Result: Computer WON the GAME!");
  } else {
    console.log("It's a DRAW! Nice!");
  }
}
