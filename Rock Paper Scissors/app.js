// confirm("This game is an only for Childrnes ");

let userScore = 0;
let comScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const comScorePara = document.querySelector("#com-score");

const gencomChoice = () => {
     const options = ["rock", "paper", "scissors"];
     const randIdx = Math.floor(Math.random() *3);
     return options[randIdx]; 
};

const drawGame = () => {
     msg.innerText = "Game was Draw. play again.";
     msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin) => {
    if (userWin) {
         userScore++;
         userScorePara.innerText = userScore;
         msg.innerText = 'You win! You beats com';
         msg.style.backgroundColor = "#006400";
    } else {
     comScore++;
     comScorePara.innerText = comScore;
     msg.innerText = 'You lost. com beats you';
     msg.style.backgroundColor = "#8b0000";
    }
};

const playGame = (userChoice) => {
    //Generate computer choice
    const comChoice = gencomChoice();

    if ( userChoice === comChoice){
        //Draw Game
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            //scissors, paper
            userWin = comChoice === "paper" ? false : true;
        } else if (userChoice === "paper"){
            //rock, scissors 
            userWin = comChoice === "scissors" ? false : true;
        } else {
            //rock, paper
            userWin = comChoice === "rock" ? false : true; 
        }
        showWinner(userWin);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});



function rest(){
    window.location.reload();
}
