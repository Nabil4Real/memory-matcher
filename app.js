
// Array consisting of card objects
const cardArray = [
    {
        name: 'cat',
        img: 'images/cat.jpeg',
    },

    {
        name: 'goat',
        img: 'images/goat.jpeg',
    },
    {
        name: 'jellyfish',
        img: 'images/jellyfish.jpeg',
    },
    {
        name: 'meerkat',
        img: 'meerkat.jpeg',
    },
    {
        name: 'puppy',
        img: 'puppy.jpeg',
    },
    {
        name: 'pony',
        img: 'pony.jpeg',
    },
    //Duplicate since we need a set of cards
    {
        name: 'cat',
        img: 'images/cat.jpeg',
    },

    {
        name: 'goat',
        img: 'images/goat.jpeg',
    },
    {
        name: 'jellyfish',
        img: 'images/jellyfish.jpeg',
    },
    {
        name: 'meerkat',
        img: 'meerkat.jpeg',
    },
    {
        name: 'puppy',
        img: 'puppy.jpeg',
    },
    {
        name: 'pony',
        img: 'pony.jpeg',
    },
    
]


//randomly shuffle the card array
cardArray.sort(() => 0.5 - Math.random())

const grid = document.querySelector('#grid')

const pickedCard = []

/**
 * Initializes and populates the game board with card images.
 * Each card is an image element with a default pattern and is
 * associated with an index in the cardArray through a data-id attribute.
 */
function createBoard(){
    for(let i = 0; i < cardArray.length; i++){
        const card = document.createElement('img')
        card.setAttribute('src','images/pattern.jpeg')
        card.setAttribute('data-id', i)
        console.log(card, i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
    }
}

createBoard()

function flipCard(){
    console.log(cardArray)
    const cardId = this.getAttribute('data-id')
    pickedCard.push(cardArray[cardId].name)
    console.log('clicked', cardId)
    console.log(pickedCard)
}
