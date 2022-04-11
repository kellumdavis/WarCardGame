let drawnCard1, drawnCard2;
let cardCount1, cardCount2;
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
const winnerText = document.querySelector('.winnerText')
const gameOver = document.querySelector('.gameOver')
const displayWinner = document.querySelector('.displayWinner')
const resetButton = document.querySelector('.reset')
//Functions
const openModal = () => {
  modal.style.display = 'block';
}

const closeModal = () => {
  modal.style.display = 'none'
}

// Event Listeners
// open.addEventListener('click', openModal)

// close.addEventListener('click', closeModal)

drawButtonOne.addEventListener('click', () => {
    
   drawnCard1 = playerOneDeck.pop()
   drawnCard2 = playerTwoDeck.pop()
   drawCard1.innerHTML = drawnCard1.rank + drawnCard1.suit
   drawCard2.innerHTML = drawnCard2.rank + drawnCard2.suit
   checkMatch()
   cardCountOne.innerHTML = `Card Count:${playerOneDeck.length + playerOneDiscard.length}`
   cardCountTwo.innerHTML = `Card Count:${playerTwoDeck.length + playerTwoDiscard.length}`
   checkWinner();
   
} )

//resets gameboard after game is over
resetButton.addEventListener('click', () => {
    playerOneDiscard = [];
    playerTwoDiscard = [];
    drawCard1.innerHTML = ``
    drawCard2.innerHTML = ``
    winnerText.innerHTML = ``
    cardCountOne.innerHTML = `Card Count:`
    cardCountTwo.innerHTML = `Card Count:`
    shuffle(deck);
    splitDeck();
    gameOver.style.display = 'none'
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
let playerOneDiscard = [];
let playerTwoDiscard = []; 
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
  //Checks winners for each matchup
function checkMatch(){
    if(drawnCard1.value > drawnCard2.value){
        winnerText.innerHTML = `Player 1 Wins the Match`
        console.log('player 1 wins')
        playerOneDiscard.unshift(drawnCard1,drawnCard2)
        console.log(playerOneDeck.length)
    }else if(drawnCard1.value < drawnCard2.value){
        winnerText.innerHTML = `Computer Wins the Match`
        playerTwoDiscard.unshift(drawnCard1,drawnCard2)
        console.log('player 2 wins')
        console.log(playerTwoDeck.length)
    }else{
        console.log('Draw')
    }
}
 //Checks for the overall winner
function checkWinner(){
    let playerOneTotal = playerOneDeck.length + playerOneDiscard.length;
    let playerTwoTotal = playerTwoDeck.length + playerTwoDiscard.length;
    if(playerOneDeck.length === 0 && playerOneTotal < playerTwoTotal){
        console.log('game over player 2 wins')
        gameOver.style.display = 'block';
        displayWinner.innerHTML = `Game Over The Computer Wins`
    }else if(playerOneDeck.length === 0 && playerOneTotal > playerTwoTotal){
        console.log('game over player 1 wins')
        gameOver.style.display = 'block';
        displayWinner.innerHTML = `Game Over Player 1 Wins`
    }else if(playerOneDeck.length === 0 && playerOneTotal == playerTwoTotal){
        console.log('Game over its a draw!')
        gameOver.style.display = 'block';
        displayWinner.innerHTML = `Game Over its a draw`
    }else{
        return
    }
}

