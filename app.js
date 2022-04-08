

//Grabbing Elements
const open = document.getElementById('openModal');
const modal = document.getElementById('modal')
const close = document.getElementById('close')
const cardCountOne = document.querySelector('.playerOneCardCount')
const cardCountTwo = document.querySelector('.playerTwoCardCount')
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

// startButton.addEventListener('click', (event) => {
//     event.preventDefault()
//     shuffle(deck);
//     splitDeck();
//     window.location = "index.html";
// })

//create initial 52 card deck
let suits = ["♠", "♣", "♥", "♦"];
let ranks = ['2','3','4','5','6','7','8','9','T','J','Q','K','A'];
let deck = [];
let playerOneDeck = [];
let playerTwoDeck = [];

for(i = 0;i < suits.length;i++) {
  for(j = 0; j < ranks.length; j++){
      let card = suits[i] +  ranks[j]
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
  
