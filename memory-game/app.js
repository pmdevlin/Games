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

const createBoard = () => {
    for(let i = 0; i < 10; i++){
        const card = document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id', i)
        console.log(card, i)
        gridDisplay.append(card)
    }

}
createBoard()