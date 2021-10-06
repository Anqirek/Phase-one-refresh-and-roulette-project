var i =0;
const letsplayBtn = document.getElementById('letsplay')
const answerBtn = document.getElementById("answer-buttons")
//console.log(answerBtn)
const slides = document.querySelectorAll(".slide")
const nextButton = document.getElementById("next");
const BASE_URL = "https://opentdb.com/api.php?amount=5&type=boolean"
let currentSlide = 0;
const answers = []; // to store the answers
let newArr;

// function showSlide(){
//     slides[currentSlide].classList.remove('active-slide');
//     slides[n].classList.add('active-slide');
//      currentSlide = n;
//      if(currentSlide === 0){
//          nextButton.style.display = 'inline-block'
//      }else{

//      }
//      if(currentSlide === slides.length-1){
//          nextButton.style.display = 'none';

//      }
// }

//event listeners
nextButton.addEventListener("click",()=>{
    let displayQuestion;
    console.log(newArr[i].question)
    displayQuestion = newArr[i];
    console.log(i+'\n'+newArr.length)
    if(i>=newArr.length-1){
        document.getElementById('next').innerText = 'Submit'
    }
    document.getElementById('question').innerText = displayQuestion.question
    i++;

})

//lets play roulette event listerner
letsplayBtn.addEventListener("click",() =>
{document.getElementById("disappear").innerHTML ="";
fetch(BASE_URL)
.then(response => response.json()
.then((data =>{
 newArr = data.results       
 console.log(newArr[i].question)
const displayQuestion = newArr[i];
i++;
// newArr.map(element => {        //for each question add it with current answer
//                                // output to add question to its answer and render it with true or false button
//     const displayQuestion = {
//         question : element.question,
//     };
     document.getElementById('question').innerText = displayQuestion.question
//     //console.log(displayQuestion);
    
//     console.log(data.results)
//     if(element.correct_answer === answerBtn){
//     return true;
//     }else{
//     console.log( element.incorrect_answers)
    
// }
// })
})
))})


