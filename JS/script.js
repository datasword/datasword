function playGame(YourChoice) {
    // this is random fuction
    var randomNumber = Math.floor(Math.random() * 3) + 1;

    // Mapping number to Rock, Paper, or Scissors
    var MrComputer;
    if (randomNumber === 1) {
        MrComputer = 'rock';
    } else if (randomNumber === 2) {
        MrComputer = 'paper';
    } else {
        MrComputer = 'scissors';
    }

    // IF statement with null starting point
    let result = "";

    if (YourChoice === MrComputer) {
        result = "It's a tie!";
    } else if (YourChoice === "rock" && MrComputer === "scissors" ||
               YourChoice === "scissors" && MrComputer === "paper" ||
               YourChoice === "paper" && MrComputer === "rock") {
        result = "You win!";
    } else {
        result = "You lose! You have to HIRE ME!";
    }

    // Display the result
	document.getElementById('result').innerHTML = `You choose ${YourChoice}, Mr.Computer chose ${MrComputer}. ${result}`;
}
