// prints "hi" in the browser's dev tools console
console.log("hi");

var rock = document.querySelector(".rock")
var scissors = document.querySelector(".scissors")
var paper = document.querySelector(".paper")
var playerChoice = document.querySelector(".playerChoice")
var computerOutput = document.querySelector(".computerChoice")
var cpuScore = 0
var computerScoreOutput = document.querySelector(".computerScoreOutput")
var playerScore = 0
var playerScoreOutput = document.querySelector(".playerScoreOutput")

rock.addEventListener("click", function() {
	playerChoice.innerHTML = `<i class="fas fa-hand-rock"></i>`
	var computerPick = computerChoice()
	var winner = checkWinner("scissors", computerPick)
	updateScore(winner)
	computerScoreOutput.innerHTML = `${cpuScore}`
	playerScoreOutput.innerHTML = `${playerScore}`
	setIcon(computerPick)

})

paper.addEventListener("click", function() {
	playerChoice.innerHTML = `<i class="fas fa-hand-paper"></i>`
	var computerPick = computerChoice()
	var winner = checkWinner("scissors", computerPick)
	updateScore(winner)
	computerScoreOutput.innerHTML = `${cpuScore}`
	playerScoreOutput.innerHTML = `${playerScore}`
	
	setIcon(computerPick)
	
})

scissors.addEventListener("click", function() {
	playerChoice.innerHTML = `<i class="fas fa-hand-scissors"></i>`
	var computerPick = computerChoice()
	var winner = checkWinner("scissors", computerPick)
	updateScore(winner)
	computerScoreOutput.innerHTML = `${cpuScore}`
	playerScoreOutput.innerHTML = `${playerScore}`
	setIcon(computerPick)
	
})

function computerChoice() {
	var random = Math.floor(Math.random() * 3)
	if(random == 0) {
		return "rock"
	}
	else if(random == 1) {
			return "paper"
	}
	else {
		return "scissors"
	}
}

function checkWinner(player, computer){
	if(player == computer){
		return "TIE"
	}
	if(player == "rock" && computer == "paper"){
		return "computer wins"
	}
	if(player == "rock" && computer == "scissors"){
		return "player wins"
	}
	if(player == "paper" && computer == "rock"){
		return "player wins"
	}
	if(player == "paper" && computer == "scissors"){
		return "computer wins"
	}
	if(player == "scissors" && computer == "paper"){
		return "player wins"
	}
	if(player == "scissors" && computer == "rock"){
		return "computer wins"
	}
}


function updateScore(result) {
	if(result == "TIE"){
		return
	}
	else if(result == "computer wins"){
		cpuScore++
	}
	else if(result == "player wins"){
		playerScore++
	}
}

function setIcon(computerPick){
	if(computerPick == "rock"){
		computerOutput.innerHTML = `<i class="fas fa-hand-rock"></i>`
	}
	else if(computerPick == "paper"){
		computerOutput.innerHTML = `<i class="fas fa-hand-paper"></i>`
	}
	else if(computerPick == "scissors"){
		computerOutput.innerHTML = `<i class="fas fa-hand-scissors"></i>`
	}
}