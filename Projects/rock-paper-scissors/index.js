const computerChoice = document.getElementById('computer-choice')
const userChoice = document.getElementById('user-choice')
const result = document.getElementById('result')
const win = new Audio('./sounds/winsound.mp3')
const draw = new Audio('./sounds/itsdraw.mp3')
const lose = new Audio('./sounds/youlose.mp3')

const possibleChoices = document.querySelectorAll('button')
let userChoiceValue
let computerChoiceValue;
let resultValue
possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (e) => {
    userChoiceValue = e.target.id 
    console.log(e.target.id)
    userChoice.innerText = userChoiceValue
    generateComputerChoice();
    getResult()
  
}))



function generateComputerChoice() {
    const data = ["rock", "scissors", "paper"]
    

    computerChoiceValue =
      data[Math.floor(Math.random() * possibleChoices.length)];

    computerChoice.innerText = computerChoiceValue
   
    
}

function getResult() {
    if (computerChoiceValue == userChoiceValue) {
     resultValue = 'Its draw'
    }
    if (computerChoiceValue === 'rock' && userChoiceValue === 'paper') {
      resultValue='You Win'
    }
    if (computerChoiceValue === 'rock' && userChoiceValue === 'scissors') {
      resultValue='You Lost'
    }
    if (computerChoiceValue === 'paper' && userChoiceValue === 'rock') {
      resultValue='You Win'
    }
    if (computerChoiceValue === 'paper' && userChoiceValue === 'scissors') {
      resultValue='You Lost'
    }
    if (computerChoiceValue === 'scissors' && userChoiceValue === 'rock') {
      resultValue='You Win'
    }
    if (computerChoiceValue === 'scissors' && userChoiceValue === 'Paper') {
      resultValue='You Lost'
    }

  // game sound 
  if (resultValue == "Its draw") {
  draw.play()
} else if (resultValue == "You Win") {
  win.play();
  } else if (resultValue == "You Lost") {
    lose.play()
}
  result.innerHTML = resultValue
  
}