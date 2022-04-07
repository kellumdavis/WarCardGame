//Grabbing Elements
const open = document.getElementById('openModal');
const modal = document.getElementById('modal')
const close = document.getElementById('close')

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
console.log(deck)


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
  console.log(shuffle(deck))
  console.log(playerOneDeck)

  function splitDeck(){
      for(i = 0;i < deck.length; i++){
          let randomNum = Math.floor(Math.random() * deck.length)
          deck.splice(randomNum)
          playerOneDeck.push(deck.splice(randomNum))
      } return playerOneDeck;
  }
  console.log(splitDeck())

  