const computer = document.getElementById('computerChoice')
const player = document.getElementById('playersChoice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
const winDisplay = document.getElementById('win')
const lossDisplay = document.getElementById('loss')
const drawDisplay = document.getElementById('draw')


let userChoice
let computerChoice
let result

const gameObj = {
    win: 0,
    loss: 0,
    draw: 0
}
  let drawCount = 0  
  let winCount = 0
  let lossCount = 0

  const rockImage = 'https://etherrock.com/0.png'
  const paperImage = 'https://cdn.pixabay.com/photo/2017/01/31/23/59/book-2028349_960_720.png'
  const scissorsImage = 'https://images.pngnice.com/download/2007/Cartoon-Scissor-PNG.png'
 


possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (e) => {
    userChoice = e.target.id
    
   switch(userChoice){
       case 'Rock':
            document.getElementById('playerChoiceImage').src = rockImage 
            break;
        case 'Paper':
            document.getElementById('playerChoiceImage').src = paperImage
            break;
        case 'Scissors':
            document.getElementById('playerChoiceImage').src = scissorsImage
            break;
   }

    generateComputerChoice()
    getResult()
}))

const generateComputerChoice = () => {
    const random = Math.floor(Math.random() * possibleChoices.length) + 1
   
     switch(random){
        case 1: 
        document.getElementById('computerChoiceImage').src = rockImage
        computerChoice = 'Rock'
        break;
        case 2: 
        document.getElementById('computerChoiceImage').src = paperImage
        computerChoice = 'Paper'
        break;
        case 3:
        document.getElementById('computerChoiceImage').src = scissorsImage
        computerChoice = 'Scissors'
        break;
    }
}

const getResult = () => {
  
    if(computerChoice === userChoice){
        result = 'Draw'
        drawCount++
        gameObj.draw = drawCount  

    }
    if(computerChoice === 'Rock' && userChoice === 'Paper'){
        result = 'You Win'
        winCount++
        gameObj.win = winCount
       
    }
    if(computerChoice === 'Rock' && userChoice === 'Scissors'){
        result = 'You lost'
        lossCount++
        gameObj.loss = lossCount
  
    }
    if(computerChoice === 'Paper' && userChoice === 'Rock'){
        result = 'You Lost'
        lossCount++
        gameObj.loss = lossCount
        
    }
    if(computerChoice === 'Paper' && userChoice === 'Scissors'){
        result = 'You Win'
        winCount++
        gameObj.win = winCount
       
     
    }
    if(computerChoice === 'Scissors' && userChoice === 'Rock'){
        result = 'You Win'
        winCount++
        gameObj.win = winCount
       

    }
    if(computerChoice === 'Scissors' && userChoice === 'Paper'){
        result = 'You Lost'
        lossCount++
        gameObj.loss = lossCount
       
    }

    resultDisplay.innerHTML = result
    winDisplay.innerHTML = gameObj.win
    lossDisplay.innerHTML = gameObj.loss
    drawDisplay.innerHTML = gameObj.draw
}