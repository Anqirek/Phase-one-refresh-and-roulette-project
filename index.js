
const letsplayBtn = document.getElementById('letsplay')
const nextButton = document.getElementById("next");
const trueBtn = document.getElementById("True")
const falseBtn = document.getElementById('False')
const BASE_URL = "https://opentdb.com/api.php?amount=5&type=boolean"
let currentSlide = 0;
//const answers = []; // to store the answers
let total_correct = 0;   // keep track of user's answers

let newArr;
let i = 0;
const output = [];

//event listener for next button
nextButton.addEventListener("click", () => {
    let displayQuestion;
    //getting the answer selected by the user and reading it into selected_answer
    let selected_answer = document.querySelector('input[name="Answer"]:checked').value;
    console.log(selected_answer)
    console.log(newArr[i].correct_answer)
    //comparing selected answer with the correct asnwer if correct incrementing the right count
    if (selected_answer === newArr[i].correct_answer) {
        total_correct++;
    }
    //checking if this is  the last question
    if (i < newArr.length - 1) {
        //moving on to next question rendering
        i++;
        displayQuestion = newArr[i];
        document.getElementById('question').innerText = displayQuestion.question
        console.log(displayQuestion.question)
        //if this is the last question changing next quetion to submit
        if (i === newArr.length - 1) {
            document.getElementById('next').innerText = 'Submit' //replacing next question with submit as the text
        }
    }
    else {
        document.getElementById('question').innerText = `you have total ${total_correct} correct answers`
    }
})

//lets play roulette event listerner
letsplayBtn.addEventListener("click", () => {
    document.getElementById("disappear").innerHTML = "";
    fetch(BASE_URL)
        .then(response => response.json()
            .then((data => {
                newArr = data.results
                console.log(newArr)
                const displayQuestion = newArr[i];
                document.getElementById('question').style = 'display:block'
                document.getElementById('answer-buttons').style = 'display:block'
                document.getElementById('next').style = 'display:block'
                document.getElementById('question').innerText = displayQuestion.question  //displaying first question from the array
                console.log(displayQuestion.question)
            })
            ))
})