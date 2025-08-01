const choices = document.querySelectorAll('.choice');
const userScoreSpan = document.getElementById('user-score');
const computerScoreSpan = document.getElementById('computer-score');
const resultDiv = document.getElementById('result');
const resetBtn = document.getElementById('reset');

let userScore = 0;
let computerScore = 0;

const getComputerChoice = () => {
  const options = ['rock', 'paper', 'scissors'];
  return options[Math.floor(Math.random() * 3)];
};

const convertToWord = (word) => {
  if (word === 'rock') return 'Rock ✊';
  if (word === 'paper') return 'Paper ✋';
  return 'Scissors ✌️';
};

const win = (user, comp) => {
  userScore++;
  userScoreSpan.textContent = userScore;
  resultDiv.textContent = `${convertToWord(user)} beats ${convertToWord(comp)}. You win! 🎉`;
};

const lose = (user, comp) => {
  computerScore++;
  computerScoreSpan.textContent = computerScore;
  resultDiv.textContent = `${convertToWord(comp)} beats ${convertToWord(user)}. You lost 😢`;
};

const draw = (user, comp) => {
  resultDiv.textContent = `Both chose ${convertToWord(user)}. It's a draw 🤝`;
};

const game = (userChoice) => {
  const computerChoice = getComputerChoice();

  if (userChoice === computerChoice) {
    draw(userChoice, computerChoice);
  } else if (
    (userChoice === 'rock' && computerChoice === 'scissors') ||
    (userChoice === 'paper' && computerChoice === 'rock') ||
    (userChoice === 'scissors' && computerChoice === 'paper')
  ) {
    win(userChoice, computerChoice);
  } else {
    lose(userChoice, computerChoice);
  }
};

// Event Listeners
choices.forEach(choice => {
  choice.addEventListener('click', () => {
    game(choice.id);
  });
});

resetBtn.addEventListener('click', () => {
  userScore = 0;
  computerScore = 0;
  userScoreSpan.textContent = '0';
  computerScoreSpan.textContent = '0';
  resultDiv.textContent = 'Make your move!';
});
