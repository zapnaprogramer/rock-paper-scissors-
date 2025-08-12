function randChoice(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function Thebotchoice() {
  let result = randChoice(1, 3);
  if (result == 1) return "Paper";
  if (result == 2) return "scissors";
  return "rock";
}

function humanchoice() {
  let userChoice = prompt("Choose either Rock, Paper, Scissors: ");
  return userChoice;
}

function game(bot, human) {
  if (
    (bot === "rock" && human === "scissors") ||
    (bot === "scissors" && human === "Paper") ||
    (bot === "Paper" && human === "rock")
  ) {
    botscore++;
    return "Computer Won";

 } else if (bot === human) {
    return "It's a tie!";
  }else {
      humanScore++;
      return "You Won!";}


  }

var humanScore = 0;
var botscore = 0;

let bot = Thebotchoice();
let human = humanchoice();

console.log("Computer chose:", bot);
console.log("You chose:", human);
console.log(game(bot, human));
console.log(botscore , humanScore);
