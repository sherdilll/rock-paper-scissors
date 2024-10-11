function getComputerChoice() {
  let random = Math.random();

  if (random < 0.33) {
    return "rock";
  } else if (random < 0.66) {
    return "paper";
  } else {
    return "scissors";
  }
}

console.log(getComputerChoice());

function getHumanChoice() {
  let choice = prompt(
    "Please enter your choice (rock, paper, scissors):"
  ).toLowerCase();

  if (choice === "rock" || choice === "paper" || choice === "scissors") {
    return choice;
  } else {
    console.log("Invalid choice, please enter a valid choice");
    return getHumanChoice();
  }
}

console.log(getHumanChoice());
