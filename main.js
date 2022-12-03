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
