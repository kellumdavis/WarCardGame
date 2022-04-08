let drawnCard1, drawnCard2;

//Grabbing Elements
const open = document.getElementById('openModal');
const modal = document.getElementById('modal')
const close = document.getElementById('close')
const cardCountOne = document.querySelector('.playerOneCardCount')
const cardCountTwo = document.querySelector('.playerTwoCardCount')
const drawButtonOne = document.querySelector('.drawButtonOne')
const drawButtonTwo = document.querySelector('.drawButtonTwo')
const drawCard1 = document.querySelector('.drawCard1')
const drawCard2 = document.querySelector('.drawCard2')
//Functions
const openModal = () => {
  modal.style.display = 'block';
}

const closeModal = () => {
  modal.style.display = 'none'
}

//Event Listeners
// open.addEventListener('click', openModal)

// close.addEventListener('click', closeModal)

drawButtonOne.addEventListener('click', () => {
   drawnCard1 = playerOneDeck.pop()
   drawCard1.innerHTML = drawnCard1.rank + drawnCard1.suit
   checkWinner()
   cardCountOne.innerHTML += playerOneDeck.length
} )
drawButtonTwo.addEventListener('click', () => {
    drawnCard2 = playerTwoDeck.pop()
    drawCard2.innerHTML = drawnCard2.rank + drawnCard2.suit
    checkWinner()
     
 })

//create initial 52 card deck
let suits = ["♠", "♣", "♥", "♦"];
let ranks = ['2','3','4','5','6','7','8','9','T','J','Q','K','A'];
let value = {
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    T: 10,
    J: 11,
    Q: 12,
    K: 13,
    A: 14
}
let deck = [];
let playerOneDeck = [];
let playerTwoDeck = [];

for(i = 0;i < suits.length;i++) {
  for(j = 0; j < ranks.length; j++){
      let card = {
          suit: suits[i],
          rank: ranks[j],
          value: value[ranks[j]] 
      }
      deck.push(card)
  }
}
shuffle(deck);
splitDeck();


// console.log(deck)


// https://bost.ocks.org/mike/shuffle/ shuffles the 52 card deck
function shuffle(deck) {
    var m = deck.length, t, i;
    
    // While there remain elements to shuffle…
    while (m) {
  
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);
  
      // And swap it with the current element.
      t = deck[m];
      deck[m] = deck[i];
      deck[i] = t;
    }
    return deck;
  }
//   console.log(shuffle(deck))
  
//Splits The full Deck in half for player1 and player2
  function splitDeck(){
    const half = Math.ceil(deck.length / 2);
    playerOneDeck = deck.slice(0, half)
    cardCountOne.innerHTML += playerOneDeck.length
    console.log(playerOneDeck)
    playerTwoDeck = deck.slice(-half)
    cardCountTwo.innerHTML += playerTwoDeck.length
    console.log(playerTwoDeck)
  }
  
function checkWinner(){
    if(drawnCard1.value > drawnCard2.value){
        console.log('player 1 wins')
        playerOneDeck.push(drawnCard1,drawnCard2)
        console.log(playerOneDeck.length)
    }else if(drawnCard1.value < drawnCard2.value){
        console.log('player 2 wins')
    }else{
        console.log('Draw')
    }
}
 