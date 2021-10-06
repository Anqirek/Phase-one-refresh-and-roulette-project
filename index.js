//lets play roulette event listerner
const letsplayBtn = document.getElementById('letsplay')
letsplayBtn.addEventListener("click",() => {document.getElementById("disappear").innerHTML ="";
const BASE_URL = "https://opentdb.com/api.php?amount=5&type=boolean"
fetch(BASE_URL)
.then(response => response.json()
.then((data =>{
        
data.results.map(element => {
            const displayQuestion = {
                question : element.question,
            };
            console.log(displayQuestion);
        })
})
))})
