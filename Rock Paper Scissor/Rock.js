const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissor = document.getElementById('scissor');
const player = document.getElementById('player');
const computer = document.getElementById('computer');
let userScore = 0;
let computerScore = 0;
let rounds = 0;
// let gameplayed = 0;
function computerPlay() {
  const choices = ['rock', 'paper', 'scissor'];
  return choices[Math.floor(Math.random() * choices.length)];
}

rock.addEventListener('click', () => playGame('rock'));
paper.addEventListener('click', () => playGame('paper'));
scissor.addEventListener('click', () => playGame('scissor'));

function playGame(mychoice) {
  console.log("My Choice -> " + mychoice)
  const computerChoice = computerPlay();
  console.log("computer Choice -> " + computerChoice);
  let result;
  // Update the scores and rounds after each game.
  if (rounds >= 5) {
    let finalresult;
    if (userScore > computerScore) {
      finalresult = "You Win the Game!";
    } else if (userScore < computerScore) {
      finalresult = "Computer Wins the Game!";
    } else {
      finalresult = "It's a Draw!";
    }
    document.getElementById('winner').innerText = finalresult;
    return;
  }

  // palying the game and computer
  if (mychoice === computerChoice) {
    console.log("Game tie");
    result = " Game tie!";
  }
  else if (mychoice == 'rock' && computerChoice == 'paper' || mychoice == 'paper' && computerChoice == 'scissor' || mychoice == 'scissor' && computerChoice == 'rock') {
    console.log("Computer Wins");
    result = 'Computer Wins!';
    computerScore++;
    computer.innerHTML = `Computer: ${computerScore}`;
  }
  else {
    console.log("You Win");
    userScore++;
    player.innerHTML = `Player: ${userScore}`;
    result = 'You Win!';
  }
  rounds++;
  document.getElementById('winner').innerText = result;
  document.getElementById('rounds').innerText = rounds;

}


