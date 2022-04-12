let drawnCard1, drawnCard2;
let cardCount1, cardCount2;
let warCard1, warCard2;
let warDeck1, warDeck2;
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
const card = document.querySelector('.card')
const winnerText = document.querySelector('.winnerText')
const gameOver = document.querySelector('.gameOver')
const displayWinner = document.querySelector('.displayWinner')
const resetButton = document.querySelector('.reset')
const roundsWon = document.querySelector('.roundsWon')
const compRounds = document.querySelector('.compRoundsWon')
const mySound = document.getElementById("sound");
const ribbon2 = document.querySelector('.ribbon2')
//Functions
const openModal = () => {
  modal.style.display = 'block';
}

const closeModal = () => {
  modal.style.display = 'none'
}

// // Event Listeners
// open.addEventListener('click', openModal)

// close.addEventListener('click', closeModal)

drawButtonOne.addEventListener('click', () => {
  
   drawCard1.style.boxShadow = null
   drawCard2.style.boxShadow = null
   startanimation();
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
    drawCard1.style.boxShadow = null
    drawCard2.style.boxShadow = null
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
let ranks = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];
let value = {
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    10: 10,
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
let playerRoundsWon = 0;
let compRoundsWon = 0;
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
bannerMove();

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
       drawCard1.style.boxShadow = '10px 10px 25px yellow'
        console.log('player 1 wins')
        playerOneDiscard.unshift(drawnCard1,drawnCard2)
        console.log(playerOneDeck.length)
    }else if(drawnCard1.value < drawnCard2.value){
        winnerText.innerHTML = `Computer Wins the Match`
        drawCard2.style.boxShadow = '10px 10px 25px yellow'
        playerTwoDiscard.unshift(drawnCard1,drawnCard2)
        console.log('player 2 wins')
        console.log(playerTwoDeck.length)
    }else{
        console.log('Draw')
        playerOneDiscard.unshift(drawnCard1)
        playerTwoDiscard.unshift(drawnCard2)
    }
}
 //Checks for the overall winner
function checkWinner(){
    let playerOneTotal = playerOneDeck.length + playerOneDiscard.length;
    let playerTwoTotal = playerTwoDeck.length + playerTwoDiscard.length;
    if(playerOneDeck.length === 0 && playerOneTotal < playerTwoTotal){
        console.log('game over player 2 wins')
        compRoundsWon++
        compRounds.innerHTML = `Rounds Won:${compRoundsWon}`
        gameOver.style.display = 'block';
        displayWinner.innerHTML = `Game Over The Computer Wins`
    }else if(playerOneDeck.length === 0 && playerOneTotal > playerTwoTotal){
        console.log('game over player 1 wins')
        playerRoundsWon++
        roundsWon.innerHTML = `Rounds Won:${playerRoundsWon}`
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

// function war(){
//  let warDeck1 = playerOneDeck.splice(-4);
//  let warDeck2 = playerTwoDeck.splice(-4);
//  let warCard1 = warDeck1.pop()
//  let warCard2 = warDeck2.pop()
//  if(warCard1.value > warCard2.value){
//    playerOneDiscard.unshift(warDeck1, warDeck2)
//  }else if(warCard1.value < warCard2.value){
//   playerTwoDiscard.unshift(warDeck1, warDeck2)
//  }
// }
// // war()
// console.log(playerOneDeck)


//function for card movement
function startanimation() {

  drawCard1.style.animationName = 'playermove';
  drawCard2.style.animationName ='compmove';

  drawCard1.addEventListener( "animationend",  function() {

  drawCard1.style.animationName = null;
  drawCard2.style.animationName = null;    

  } );

}

function bannerMove(){
  ribbon2.style.animationName = 'bannermove';
  ribbon2.addEventListener( "animationend",  function() {

    ribbon2.style.top = '0px'
    ribbon2.style.paddingTop = '50px';
    } );
}