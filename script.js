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
