fetch("https://opentdb.com/api.php?amount=10&type=boolean")
.then(resp => resp.json())
.then(console.log)