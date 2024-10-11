humanScore = 0;
computerScore = 0;

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();

  if (humanChoice === computerChoice) {
    console.log(`It's a tie! Both chose ${humanChoice}`);
    return;
  }

  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
    humanScore++;
  } else {
    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    computerScore++;
  }

  console.log(
    `Current score - Human: ${humanScore}, computer: ${computerScore}`
  );
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

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
