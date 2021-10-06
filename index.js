//lets play roulette event listerner
const letsplayBtn = document.getElementById('letsplay')
const answerBtn = document.getElementById("answer-buttons")
letsplayBtn.addEventListener("click",() => {document.getElementById("disappear").innerHTML ="";
const BASE_URL = "https://opentdb.com/api.php?amount=5&type=boolean"
fetch(BASE_URL)
.then(response => response.json()
.then((data =>{
    const newArr = data.results       
newArr.map(element => {
            const displayQuestion = {
                question : element.question,
            };
            
            console.log(displayQuestion);
           
          console.log(data.results)
          if(element.correct_answer === answerBtn){
            return true;
        }else{
            console.log( element.incorrect_answers)
            
        }
          
            // const answers = 0;
            // let choice = '';
            // for( choice in displayQuestion.correct_answer){
                
            // }
            
           
        })
            
           // console.log(element.correct_answer)
           
        

        
})
))})


