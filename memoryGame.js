document.addEventListener('DOMContentLoaded', () => {


    //card options
    const cardsArray = [
        {
            name: 'bulbasaur',
            img: 'images/bulbasaur.png'
        },
        {
            name: 'charmander',
            img: 'images/charmander.png'
        },
        {
            name: 'dragonite',
            img: 'images/dragonite.png'
        },
        // {
        //     name: 'eevee',
        //     img: 'images/eevee.png'
        // },
        {
            name: 'growlithe',
            img: 'images/growlithe.png'
        },
        {
            name: 'pokeball',
            img: 'images/pokeball.png'
        },
        {
            name: 'sandshrew',
            img: 'images/sandshrew.png'
        },
        {
            name: 'squirtle',
            img: 'images/squirtle.png'
        },
        {
            name: 'white',
            img: 'images/white.png'
        },
        {
            name: 'bulbasaur',
            img: 'images/bulbasaur.png'
        },
        {
            name: 'charmander',
            img: 'images/charmander.png'
        },
        {
            name: 'dragonite',
            img: 'images/dragonite.png'
        },
        // {
        //     name: 'eevee',
        //     img: 'images/eevee.png'
        // },
        {
            name: 'growlithe',
            img: 'images/growlithe.png'
        },
        {
            name: 'pokeball',
            img: 'images/pokeball.png'
        },
        {
            name: 'sandshrew',
            img: 'images/sandshrew.png'
        },
        {
            name: 'squirtle',
            img: 'images/squirtle.png'
        },
        {
            name: 'white',
            img: 'images/white.png'
        }
    ]

cardsArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    let cardsChosen = []
    let cardsChosenId = []
    let cardsWon = []

function createBoard() {
    for (let i = 0; i < cardsArray.length; i++) {
        let card = document.createElement('img')
        card.setAttribute('src', 'images/pokeball.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
    }
}

createBoard()

function checkForMatch() {
let cards = document.querySelectorAll('img')
const optionOneId = cardsChosenId[0]
const optionTwoId = cardsChosenId[1]
if (cardsChosen[0] === cardsChosen[1]) {
    alert('You found a match')
    cards[optionOneId].setAttribute('src', 'images/white.png')
    cards[optionTwoId].setAttribute('src', 'images/white.png')
    cardsWon.push(cardsChosen)
} else {
    cards[optionOneId].setAttribute('src', 'images/pokeball.png')
    cards[optionTwoId].setAttribute('src', 'images/pokeball.png')
    alert('Sorry, try again')
}
cardsChosen = []
cardsChosenId = []
resultDisplay.textContent = CardsWon.length
if (cardsWon.length === cardsArray.length/2) {
    resultDisplay.textContent = 'Congratulations! you found them all!'
}
}



function flipCard() {
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardsArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardsArray[cardId].img)
    if (cardsChosen.length === 2) {
        setTimeout(checkForMatch, 500)
    }
}


})