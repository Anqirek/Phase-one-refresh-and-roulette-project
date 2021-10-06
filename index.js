//lets play roulette event listerner
const letsplayBtn = document.getElementById('letsplay')
letsplayBtn.addEventListener("click",() => {document.getElementById("disappear").innerHTML ="";
const BASE_URL = "https://opentdb.com/api.php?amount=5&type=boolean"
fetch(BASE_URL)
.then(response => response.json())
.then((data =>{
           //onst response1 = Object.values(question.results)
        data.results.forEach(element => {
            console.log(element.question);
        });
         
   
       //response1.forEach(results => results.question));
        //console.log(results.question)
    }
   


   // console.log(letsplayBtn)
))})