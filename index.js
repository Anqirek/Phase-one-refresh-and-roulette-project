//Fetching DOM elements
const letsplayBtn = document.getElementById('letsplay')
const nextButton = document.getElementById("next");
const trueBtn = document.getElementById("True")
const falseBtn = document.getElementById('False')
const submitBtn = document.getElementById('submit')
const BASE_URL = "https://opentdb.com/api.php?amount=5&type=boolean"
//const answers = []; // to store the answers
let total_correct = 0;   // keep track of user's answers
let newArr;  //data.results array
let i = 0;
fetch(BASE_URL)
    .then(response => response.json()
        .then((data => {
            newArr = data.results
            console.log(newArr)
        })
        ))
//lets play roulette event listerner
letsplayBtn.addEventListener("click", () => {
//After click disappearing the letsplay
document.getElementById("disappear").style = 'display:none';
//After click enabling the required fields question radio button and next buttion
document.getElementById('question').style = 'display:block'
document.getElementById('answer-buttons').style = 'display:block'
document.getElementById('next').style = 'display:block'
//getting the first question from the array
let displayQuestion = newArr[i];
//adding the question to innertext of question field
document.getElementById('question').innerText = displayQuestion.question  //displaying first question from the array
console.log(displayQuestion.question)
})
var isSelected = function(radio_btn) {
    for(var i=0; i<radio_btn.length; i++) {
        if( radio_btn[i].checked ) {
            return true;
        }
    }
    return false;
};
//event listener for next button
nextButton.addEventListener("click", () => {
    document.getElementById('question').style = 'display:block'
    let radio_btn=document.getElementsByName('Answer');
    let displayQuestion;
    if( !isSelected(radio_btn) ) {
        alert('Please select an Answer .');
        return;
    }
    //check if an option is selected if not alert and return
    //getting the answer selected by the user and reading it into selected_answer
    let selected_answer = document.querySelector('input[name="Answer"]:checked').value;
    console.log(selected_answer)
    console.log(newArr[i].correct_answer)
    //comparing selected answer with the correct asnwer if correct incrementing the right count
    if (selected_answer === newArr[i].correct_answer) {
        total_correct++;
    }
    //moving on to next question rendering
    i++;
    displayQuestion = newArr[i]; //fetching next question
    //resetting the radio buttion
    var radioele = document.getElementsByName("Answer");
    for (var j = 0; j < radioele.length; j++)
        radioele[j].checked = false;
    //adding the question to innertext of question field
    document.getElementById('question').innerText = displayQuestion.question
    console.log(displayQuestion.question)
    //if this is the last question disappearing next quetion button and displaying the submit quiz button
    if (i === newArr.length - 1) {
        document.getElementById('next').style = 'display:none' //next button disappears
        document.getElementById('submit').style = 'display:block'//enabling submit displaying
    }
})
//submit button -end of the page
submitBtn.addEventListener('click', () => {
    let radio_btn=document.getElementsByName('Answer');
    let displayQuestion;
    if( !isSelected(radio_btn) ) {
        alert('Please select an Answer .');
        return;
    }
    let selected_answer = document.querySelector('input[name="Answer"]:checked').value;
    if (selected_answer === newArr[i].correct_answer) {
        total_correct++;
    }
// const submitImage = document.style.backgroundimage('img')
    document.getElementById('answer-buttons').style = 'display:none'
    document.getElementById('feedbackform').style = 'display:block'
    submitBtn.style = 'display:none';
    document.getElementById('question').innerText = `You have total ${total_correct} correct answers!!!!!`
    if (total_correct === 5) {
        document.body.style.backgroundImage = "url('https://yaybrigade.com/images/social-image.png')";
    }
})