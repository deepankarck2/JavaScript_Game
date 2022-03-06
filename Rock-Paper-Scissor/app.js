const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')

let userChoice
let computerChoice
let result 

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  userChoice = e.target.id
  userChoiceDisplay.innerHTML = userChoice

  generateComputerChoice()
  computerChoiceDisplay.innerHTML = computerChoice 

  getResult()
  resultDisplay.innerHTML = result
}))

function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3) + 1 // or you can use possibleChoices.length
    console.log(randomNumber)

    if(randomNumber == 1){
        computerChoice = "rock"
    }
    if(randomNumber == 2){
        computerChoice = "paper"
    }
    if(randomNumber == 3){
        computerChoice = "scissor"
    }
}

function getResult (){
    if(computerChoice == userChoice){
        result= "It is a draw!! "
    }else if(computerChoice == "rock" && userChoice =="paper"){
        result = "You lost 🙁"
    }else if(computerChoice == "rock" && userChoice =="scissor"){
        result = "You win 😁"
    } else if(computerChoice == "paper" && userChoice =="rock"){
        result = "You lost 🙁"
    }else if(computerChoice == "paper" && userChoice =="scissor"){
        result = "You Win 😁"
    }else if(computerChoice == "scissor" && userChoice =="paper"){
        result = "You lost 🙁"
    }else if(computerChoice == "scissor" && userChoice =="rock"){
        result = "You win 😁"
    }
}