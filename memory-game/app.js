const cardArr = [
    {
        name: 'fries',
        img: 'images/fries.png',
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png',
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png',
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png',
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png',
    },
    {
        name: 'pizza',
        img: 'images/pizza.png',
    },
    {
        name: 'fries',
        img: 'images/fries.png',
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png',
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png',
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png',
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png',
    },
    {
        name: 'pizza',
        img: 'images/pizza.png',
    },
    
]

// sorts the arr randomly
// sort works by comparing two values. It compares then sorts through the arr 
// because math random returns back anywhere between 0 and less -1 we are checking 
//if the value is greater than 0.5 or less than 0.5. and it will shuffle based 
// on that parameter. 
cardArr.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid')
const resultDisplay = document.querySelector('#result')
let cardsChosen = []
let cardsChosenIds = []
const cardsWon =[]

const createBoard = () => {
    for(let i = 0; i < cardArr.length; i++){
        const card = document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        // console.log(card, i)
        gridDisplay.append(card)
    }

}
// call the function 
createBoard()

function checkMatch (){
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenIds[0]
    const optionTwoId = cardsChosenIds[1]

    if(optionOneId == optionTwoId ){
        alert('you have clicked the same image')
    }


    console.log('check for a match')
    if(cardsChosen[0] == cardsChosen[1]){
        alert('you have found a match')
        cards[optionOneId].setAttribute('src', 'images/white.png')
        cards[optionTwoId].setAttribute('src', 'images/white.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        
        cardsWon.push(cardsChosen)
    }else{
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
        alert('sorry try again')
    }
    resultDisplay.textContent = cardsWon.length
    let cardsChosen = []
    let cardsChosenIds = []

    if(cardsWon.length == cardArr.length/2){
        resultDisplay.innerHTML = 'congrats you found them all'
    }
}

// if arrow function is used for this function you get an error because the
// the function createBoard is initiated before the flipCard function
function flipCard() {
// using the this keyword to access whatever is clicked
    const cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArr[cardId].name)
    cardsChosenIds.push(cardId)
    console.log(cardsChosen)
    console.log(cardsChosenIds)
    this.setAttribute('src', cardArr[cardId].img)
    if(cardsChosen.length === 2){
        setTimeout(checkMatch, 500) 
    }
}


