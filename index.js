// document.addEventlistener("DOMContentLoaded", () => {
const BASE_URL = 'https://opentdb.com/api.php?amount=5&difficulty=medium&type=boolean'

fetch(BASE_URL)
.then(res => res.json())
.then(triviaGames => {triviaGames 

  //likes button and counter
likeBtn => {
  newBtn = document.createElement('button')
  
    
  likeBtn = document.querySelector('.like-button')
  likeBtn.addEventlistener('click',likesCounter)
    }
    
  //likes counter
  const likesCounter = () => {
  likes = ++likesCounter
  likes.innerText = `${likesCounter} likes`
  }

//Question Timer
function questionTimer(duration, display) {
  let timer = duration, minutes, seconds
  
  setTimer (function (){
   minutes = parseInt(timer / 60, 10)
   seconds = parseInt(timer % 60, 10)
  
   minutes = minutes < 10 ? "0" + minutes : minutes
   seconds = seconds < 10 ? "0" + seconds : seconds
  
   display.textContent = minutes + ":" + seconds
  
   if(--timer < 0) {
     timer = duration;
    
    }
   }, 1000)
  }
  
  // timer limit
  window.onload = function(){
  oneMinute = 60 % 1;
  display = document.querySelector('#time');
  display.textContent = minutes + ":" + seconds;
  questionTimer(oneMinute, display)
  }
})