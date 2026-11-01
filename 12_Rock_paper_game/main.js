let scoreuser = 0;
let scorecomputer = 0;

const userscoreNumber = document.querySelector("#user_score");
const compscoreNumber = document.querySelector("#comp_score");

const choice = document.querySelectorAll(".choices");
const mssg = document.querySelector("#msg");

// Chooses one of the three possible moves for the computer.
const genCompChoice = () => {
  // These are the same moves the user can choose in the game.
  const options = ["rock", "paper", "scissors"];
  // Generate a random array index: 0, 1, or 2.
  const randIdx = Math.floor(Math.random() * 3);
  // Return the move stored at that randomly selected index.
  return options[randIdx];
};

// Handles a round in which the user and computer chose the same move.
const drawGame = () => {
    // Log the result for debugging in the browser console.
    console.log("Game was Draw");
    // Show the draw result in the page's message element.
    mssg.innerText = "Game was Draw";
    // Set a neutral background color for the draw message.
    mssg.style.backgroundColor = " #081b31"

}

// Updates the winner's score and shows the result of the round.
// userWin indicates whether the user won; userchoice and compchoice
// are the moves made by the user and computer.
const showWinner = (userWin , userchoice , compchoice) => {
if(userWin === true){
    // Increase and display the user's score after a win.
    scoreuser++;
    userscoreNumber.innerText = scoreuser;
    // Log and show a win message, including the moves that determined it.
    console.log("You win");
    mssg.innerText = "You Win!";
    mssg.style.backgroundColor = "green"
    mssg.innerText = `You win! Your ${userchoice} beats ${compchoice}`;

}
else{
    // Increase and display the computer's score after the user loses.
    scorecomputer++;
    compscoreNumber.innerText = scorecomputer;
    // Log and show a loss message, including the moves that determined it.
    console.log("You Lose");
    mssg.innerText = "You Lose";
    mssg.style.backgroundColor = "red"
    mssg.innerText = `You lost. ${compchoice} beats your ${userchoice}`;
}
};

// Runs one round using the user's selected move.
let playgame = (userchoices) => {
        // Log the user's move, then randomly choose and log the computer's move.
        console.log("clicked", userchoices);

        const compchoice = genCompChoice();
        console.log("computer choice", compchoice)

        // Matching moves result in a draw, so neither score is changed.
        if(userchoices === compchoice){
            drawGame();
        }else {
            // For a non-draw, determine whether the user's move beats the computer's.
            let userWin = true;

            // Rock loses to paper.
            if(userchoices === "rock")
                {
                userWin = compchoice === "paper" ? false : true;
            } 
            // Paper loses to scissors.
            else if(userchoices === "paper")
                {
                userWin = compchoice === "scissors" ? false : true;
            }
            // The remaining valid choice is scissors, which loses to rock.
            else 
                {
                userWin = compchoice === "rock" ? false : true;
            }

            // Pass the outcome and both moves to update the score and message.
            showWinner(userWin , userchoices , compchoice);
        }


};

// Visit each choice element and attach a handler to respond to its click.
choice.forEach((item) => {
    item.addEventListener("click", () => {
        // Read the clicked element's id (rock, paper, or scissors) as the user's move.
        const userchoices = item.getAttribute("id");
        // Start a round with the move selected by the user.
        playgame(userchoices);
    });
});
