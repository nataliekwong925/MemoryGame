//Global constants
const cluePauseTime = 333; //How long to pause in between clues
const nextClueWaitTime = 1000; //How long to wait before starting playback of the clue sequence


//Global Variables
let pattern = new Array();
var i;
for (i = 0; i < 8; i++){
  //Generate random number 1-6 for each element in pattern
  pattern[i] = Math.floor(Math.random() * 6) + 1;
}
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5; //Must be between 0.0 and 1.0
var guessCounter = 0;
var clueHoldTime = 1000; //How long to hold each clue's light/sound
var mistakes = 0;

function startGame(){
  //Initialize game variables
  progress = 0;
  gamePlaying = true;
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  playClueSequence();
}

function stopGame(){
  gamePlaying = false;
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}

// Sound Synthesis Functions
const freqMap = {
  1: 200,
  2: 250,
  3: 300,
  4: 350,
  5: 400,
  6: 450
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    tonePlaying = true
  }
}
function stopTone(){
    g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
    tonePlaying = false
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}

function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

function playClueSequence(){
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
  
    
  }
}

function loseGame(){
  stopGame();
  alert("Game Over. You lost. Try again, you got this!")
}

function winGame(){
  stopGame();
  alert("You won! Congratulations! Go treat yourself to something nice.")
}

function guess(btn){
  console.log("User guessed: " + btn);
  if(!gamePlaying){
    return;
  }
  if(btn==pattern[guessCounter]){ //Correct guess
    if(guessCounter < progress){ //Check next guess
      guessCounter++;
    }
    else{
      if(progress == pattern.length-1){ //End of game
        winGame();
      }
      else{ //Continue game
        progress++;
        clueHoldTime -= 100;
        playClueSequence();
      }
    } 
  }
  else{
    if (mistakes < 2){
      if (mistakes == 1){
        alert("Wrong! You have made 1 mistake. You have 1 more try.")
      }
      else{
        alert("Wrong! You have made 2 mistakes. Don't mess up again or you will lose!")
      }
      mistakes++;
      playClueSequence();
    }
    else{
    loseGame();
    }
  }
}

