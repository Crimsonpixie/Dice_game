/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/
var scores, roundScore, activePlayer,gamePlaying=true;
Init();
//console.log(dice);
//document.querySelector('#current-' + activePlayer).textContent=dice;
document.querySelector(".btn-roll").addEventListener("click", function() {
  if(gamePlaying)
  {  
  var dice0 = Math.floor(Math.random() * 6) + 1;
  var dice1 = Math.floor(Math.random() * 6) + 1;
  //document.querySelector('.dice').style.display='block';
  var dice0DOM = document.querySelector("#dice-0");
  var dice1DOM = document.querySelector("#dice-1");
  dice0DOM.style.display = "block";
  dice1DOM.style.display = "block";
  dice0DOM.src = "dice-" + dice0 + ".png";
  dice1DOM.src = "dice-" + dice1 + ".png";
  if (dice0!=1 && dice1!=1) {
    roundScore += dice0+dice1;
    document.querySelector("#current-" + activePlayer).textContent = roundScore;
  } else {
    nextPlayer();
  }
 } 
});
document.querySelector(".btn-hold").addEventListener("click", function() {
  if(gamePlaying)
  {  
  scores[activePlayer] += roundScore;
  document.querySelector("#score-" + activePlayer).textContent =
    scores[activePlayer];
  var x=document.querySelector('.input').value;
  var winningScore;
  if(x)
  {
    winningScore=x;
  }
  else{
  winningScore=100;
  }
  if (scores[activePlayer] >= winningScore) {
    document.querySelector("#name-" + activePlayer).textContent = "Winner!";
    document.getElementById("dice-0").style.display = "none";
    document.getElementById("dice-1").style.display = "none";
    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.add("winner");
    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.remove("active");
     gamePlaying=false;
    } 
  else {
    nextPlayer();
  }
 }
});
function nextPlayer() {
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  roundScore = 0;
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");
  //document.querySelector('.player-0-panel).classList.remove('active);
  //document.querySelector('.player-1-panel).classList.add('active);
  document.getElementById("dice-0").style.display = "none";
  document.getElementById("dice-1").style.display = "none";
}
document.querySelector(".btn-new").addEventListener("click", Init);
function Init() {
  scores = [0, 0];
  roundScore = 0;
  activePlayer = 0;
  document.getElementById("dice-0").style.display = "none";
  document.getElementById("dice-1").style.display = "none";
  document.getElementById("score-0").textContent = "0";
  document.getElementById("score-1").textContent = "0";
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";
  document.getElementById("name-0").textContent = "Player 1";
  document.getElementById("name-1").textContent = "Player 2";
  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");
  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-0-panel").classList.add("active"); 
  
}
