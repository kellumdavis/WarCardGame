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
let suits = ['H','C','D','S']
let ranks = ['2','3','4','5','6','7','8','9','T','J','Q','K','A']
let deck = [];

for(i = 0;i < suits.length;i++) {
  for(j = 0; j < ranks.length; j++){
      let card = suits[i] +  ranks[j]
      deck.push(card)
  }
}
console.log(deck)