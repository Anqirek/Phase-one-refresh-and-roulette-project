const letsplayBtn = document.getElementById('letsplay')
const nextButton = document.getElementById("next");
const trueBtn = document.getElementById("True")
const falseBtn = document.getElementById('False')
const submitBtn = document.getElementById('submit')
const BASE_URL = "https://opentdb.com/api.php?amount=5&type=boolean"

let total_correct = 0;  
let newArr; 
let i = 0;
fetch(BASE_URL)
    .then(response => response.json()
        .then((data => {
            newArr = data.results
            console.log(newArr)
        })
        ))

function eventListeners(){
    document.getElementById("disappear").style = 'display:none';
    document.getElementById('question').style = 'display:block'
    document.getElementById('answer-buttons').style = 'display:block'
    document.getElementById('next').style = 'display:block'
}        

letsplayBtn.addEventListener("click", () => {
eventListeners();
let displayQuestion = newArr[i];
document.getElementById('question').innerText = displayQuestion.question;
})

var isSelected = function(radio_btn) {
    for(var i=0; i<radio_btn.length; i++) {
        if( radio_btn[i].checked ) {
            return true;
        }
    }
    return false;
};

nextButton.addEventListener("click", () => {
    document.getElementById('question').style = 'display:block'
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
    i++;
    displayQuestion = newArr[i]; 
    
    var radioEle = document.getElementsByName("Answer");
    for (var j = 0; j < radioEle.length; j++)
        radioEle[j].checked = false;
   
    document.getElementById('question').innerText = displayQuestion.question
    if (i === newArr.length - 1) {
        document.getElementById('next').style = 'display:none' 
        document.getElementById('submit').style = 'display:block'
    }
})

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

    document.getElementById('answer-buttons').style = 'display:none'
    document.getElementById('feedbackform').style = 'display:block'
    submitBtn.style = 'display:none';
    document.getElementById('question').innerText = `You have total ${total_correct} correct answers!!!!!`
    if (total_correct === 5) {
        document.body.style.backgroundImage = "url('https://yaybrigade.com/images/social-image.png')";
    }
})
